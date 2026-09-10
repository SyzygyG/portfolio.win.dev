/**
 * Portable build: compiles Tailwind CSS, then renders the PHP site to dist/
 * through a bundled PHP 8.3 runtime (php-wasm). Lets the build run anywhere
 * Node is available (e.g. Cloudflare Pages), while `php bin/build.php` produces
 * identical output when a native PHP CLI is present.
 */
import { PhpNode } from "php-wasm/PhpNode.mjs";
import { spawnSync } from "node:child_process";
import { mkdirSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");

/** Recursively mirror a host directory into the PHP virtual filesystem. */
async function writeTree(php, hostPath, wasmPath) {
    await php.mkdir(wasmPath);
    for (const name of readdirSync(hostPath)) {
        const hostFull = join(hostPath, name);
        const wasmFull = wasmPath + "/" + name;
        if (statSync(hostFull).isDirectory()) {
            await writeTree(php, hostFull, wasmFull);
        } else {
            await php.writeFile(wasmFull, readFileSync(hostFull));
        }
    }
}

/** Recursively copy the rendered dist/ out of the PHP filesystem. */
async function readTree(php, wasmPath, hostPath) {
    mkdirSync(hostPath, { recursive: true });
    const names = await php.readdir(wasmPath);
    for (const name of names) {
        if (name === "." || name === "..") continue;
        const wasmFull = wasmPath + "/" + name;
        const hostFull = join(hostPath, name);
        const stat = await php.stat(wasmFull);
        const isDir = (stat.mode & 0o170000) === 0o40000;
        if (isDir) {
            await readTree(php, wasmFull, hostFull);
        } else {
            const bytes = await php.readFile(wasmFull);
            writeFileSync(hostFull, Buffer.from(bytes));
        }
    }
}

function run(cmd, args) {
    const result = spawnSync(cmd, args, { cwd: root, stdio: "inherit", shell: process.platform === "win32" });
    if (result.status !== 0) {
        process.exit(result.status ?? 1);
    }
}

// 1. Clean previous output.
rmSync(dist, { recursive: true, force: true });

// 2. Compile CSS.
run(join(root, "node_modules", ".bin", "tailwindcss"), [
    "-i", "src/css/main.css",
    "-o", "dist/assets/main.css",
    "--minify",
]);

// 3. Render pages with PHP.
const php = new PhpNode();
await php.mkdir("/app");
for (const dir of ["bin", "lib", "data", "views", "public", "src"]) {
    await writeTree(php, join(root, dir), "/app/" + dir);
}

let output = "";
php.addEventListener("output", (event) => {
    output += event.detail.join("");
});
await php.run('<?php chdir("/app"); require "bin/build.php";');
process.stdout.write(output);

// 4. Pull dist/ back to the host.
await readTree(php, "/app/dist", dist);

console.log("Build complete →", dist);
