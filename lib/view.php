<?php

declare(strict_types=1);

/**
 * View rendering helpers.
 */

/**
 * Render a PHP view file to a string, with an optional variable bag.
 *
 * @param array<string, mixed> $vars
 */
function render(string $view, array $vars = []): string
{
    extract($vars, EXTR_SKIP);

    ob_start();
    include $view;

    return (string) ob_get_clean();
}

/**
 * Render a partial (views/partials/*.php) with variables.
 *
 * @param array<string, mixed> $vars
 */
function partial(string $name, array $vars = []): string
{
    $file = __DIR__ . '/../views/partials/' . $name . '.php';

    return render($file, $vars);
}

/**
 * Path helpers.
 */
function rootPath(string $path): string
{
    return __DIR__ . '/../' . ltrim($path, '/');
}

function viewsPath(string $path): string
{
    return __DIR__ . '/../views/' . ltrim($path, '/');
}
