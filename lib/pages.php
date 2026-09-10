<?php

declare(strict_types=1);

/**
 * Page registry: maps each route to its metadata and renderer.
 * The layout shell (head/nav/footer) wraps whatever each renderer returns.
 */

$site = require rootPath('data/site.php');
$projects = require rootPath('data/projects.php');

$projectBySlug = [];
foreach ($projects['items'] as $project) {
    $projectBySlug[$project['slug']] = $project;
}

$projectSlugs = array_keys($projectBySlug);

$projectVars = function (string $slug) use ($projectBySlug, $projectSlugs, $projects) {
    $index = array_search($slug, $projectSlugs, true);
    $nextSlug = $projectSlugs[$index + 1] ?? $projectSlugs[0];

    return [
        'project' => $projectBySlug[$slug],
        'next' => $projectBySlug[$nextSlug],
        'all' => $projects,
    ];
};

$pages = [
    '/' => [
        'output' => '',
        'title' => $site['name'] . ' — Full Stack Developer & Project Manager',
        'description' => 'Erwin Gamaliel Gamalong — full stack developer and project manager in Quezon City, Philippines. Web platforms, internal tools, and immersive 3D tours.',
        'canonical' => $site['url'] . '/',
        'render' => function () {
            return render(viewsPath('pages/home.php'));
        },
    ],
    '/projects/hytec-power-virtual-tour/' => [
        'output' => 'projects/hytec-power-virtual-tour/',
        'title' => 'Hytec Power Inc. Virtual Tour — Case Study · ' . $site['shortName'],
        'description' => 'An interactive 3D virtual tour of Hytec Power Inc. built with Google Model Viewer and Photo Sphere Viewer, backed by a Laravel content management system.',
        'canonical' => $site['url'] . '/projects/hytec-power-virtual-tour/',
        'render' => function () use ($projectVars) {
            return render(viewsPath('pages/project.php'), $projectVars('hytec-power-virtual-tour'));
        },
    ],
    '/projects/videre/' => [
        'output' => 'projects/videre/',
        'title' => 'VIDERE — Digital Art Platform · Case Study · ' . $site['shortName'],
        'description' => 'VIDERE is a digital art platform for creating, sharing, selling, and collaborating on artwork — React, Node.js, Python, and MongoDB.',
        'canonical' => $site['url'] . '/projects/videre/',
        'render' => function () use ($projectVars) {
            return render(viewsPath('pages/project.php'), $projectVars('videre'));
        },
    ],
    '/projects/qcu-journals/' => [
        'output' => 'projects/qcu-journals/',
        'title' => 'QCU Journals — Academic Publishing Platform · ' . $site['shortName'],
        'description' => 'The scholarly journal platform for Quezon City University, built on PKP Open Journal Systems.',
        'canonical' => $site['url'] . '/projects/qcu-journals/',
        'render' => function () use ($projectVars) {
            return render(viewsPath('pages/project.php'), $projectVars('qcu-journals'));
        },
    ],
    '/404.html' => [
        'output' => '404.html',
        'title' => 'Page not found · ' . $site['shortName'],
        'description' => 'The page you opened is not part of this portfolio.',
        'canonical' => $site['url'] . '/404.html',
        'render' => function () {
            return render(viewsPath('pages/not-found.php'));
        },
    ],
];

return [
    'pages' => $pages,
    'site' => $site,
];
