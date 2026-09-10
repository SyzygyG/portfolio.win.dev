/**
 * Tiny static server for previewing the built dist/ directory.
 * Usage: node scripts/serve.mjs [port]
 */
import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { dirname, extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "dist");
const port = Number(process.argv[2] ?? 4173);

const mime = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".svg": "image/svg+xml",
    ".webp": "image/webp",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".woff2": "font/woff2",
    ".pdf": "application/pdf",
    ".xml": "application/xml; charset=utf-8",
    ".txt": "text/plain; charset=utf-8",
};

createServer((req, res) => {
    let pathname = decodeURIComponent((req.url ?? "/").split("?")[0]);
    if (pathname.endsWith("/")) pathname += "index.html";

    const file = normalize(join(root, pathname));
    if (!file.startsWith(root) || !existsSync(file) || !statSync(file).isFile()) {
        res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
        res.end("Not found");
        return;
    }

    res.writeHead(200, {
        "Content-Type": mime[extname(file).toLowerCase()] ?? "application/octet-stream",
    });
    createReadStream(file).pipe(res);
}).listen(port, "0.0.0.0", () => {
    console.log(`Serving dist/ at http://0.0.0.0:${port}`);
});
