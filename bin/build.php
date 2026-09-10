<?php

declare(strict_types=1);

/**
 * Static site builder. Renders every page in lib/pages.php into dist/ and
 * copies public/ assets alongside. Run with `php bin/build.php` (or through
 * scripts/build.mjs, which drives this same script via a PHP runtime).
 */

$root = dirname(__DIR__);
$dist = $root . '/dist';

require $root . '/lib/html.php';
require $root . '/lib/view.php';
require $root . '/lib/dates.php';

$registry = require $root . '/lib/pages.php';
$pages = $registry['pages'];
$site = $registry['site'];

/**
 * Write a file, creating parent directories as needed.
 */
function writeFile(string $path, string $contents): void
{
    $dir = dirname($path);
    if (!is_dir($dir)) {
        mkdir($dir, 0777, true);
    }
    file_put_contents($path, $contents);
}

/**
 * Recursively copy a directory.
 */
function copyDirectory(string $from, string $to): void
{
    if (!is_dir($from)) {
        return;
    }

    if (!is_dir($to)) {
        mkdir($to, 0777, true);
    }

    $entries = scandir($from);
    if ($entries === false) {
        return;
    }

    foreach ($entries as $entry) {
        if ($entry === '.' || $entry === '..') {
            continue;
        }

        $source = $from . '/' . $entry;
        $target = $to . '/' . $entry;

        if (is_dir($source)) {
            copyDirectory($source, $target);
        } else {
            copy($source, $target);
        }
    }
}

$built = 0;

foreach ($pages as $path => $page) {
    $content = ($page['render'])();

    $html = render($root . '/views/layout.php', [
        'page' => $page,
        'site' => $site,
        'content' => $content,
        'currentPath' => $path,
    ]);

    $output = $page['output'];

    if (substr($output, -5) === '.html') {
        $outFile = rtrim($dist, '/') . '/' . $output;
    } else {
        $outFile = rtrim($dist . '/' . $output, '/') . '/index.html';
    }

    writeFile($outFile, $html);
    $built++;
}

copyDirectory($root . '/public', $dist);

// Client-side JavaScript lives in src/js and is copied verbatim to dist/assets.
foreach (glob($root . '/src/js/*.js') ?: [] as $jsFile) {
    $target = $dist . '/assets/' . basename($jsFile);
    writeFile($target, (string) file_get_contents($jsFile));
}

echo "Built {$built} pages into dist/\n";
