<?php

declare(strict_types=1);

/** Expected vars: $site, $currentPath. */

$onHome = ($currentPath ?? '/') === '/';
$workActive = !$onHome;

?>
<header class="site-nav">
    <div class="container nav-inner">
        <a class="nav-logo" href="/"><?= e($site['shortName']) ?><span class="logo-dot" aria-hidden="true"></span></a>

        <nav class="nav-links" aria-label="Primary">
            <?php foreach ($site['nav'] as $link): ?>
                <a class="nav-link<?= ($link['href'] === '/#work' && $workActive) ? ' is-active' : '' ?>"
                   href="<?= e($link['href']) ?>"><?= e($link['label']) ?></a>
            <?php endforeach; ?>
            <a class="nav-resume" href="<?= e($site['resume']['href']) ?>">
                Resume <?= icon('arrow-up-right', 13) ?>
            </a>
        </nav>

        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu"
                aria-label="Open menu">
            <?= icon('menu', 20) ?>
        </button>
    </div>

    <div class="mobile-menu" id="mobile-menu">
        <div class="mobile-menu__bar">
            <a class="nav-logo" href="/"><?= e($site['shortName']) ?><span class="logo-dot" aria-hidden="true"></span></a>
            <button class="mobile-menu__close" type="button" aria-label="Close menu">
                <?= icon('close', 20) ?>
            </button>
        </div>
        <nav aria-label="Mobile">
            <?php foreach ($site['nav'] as $link): ?>
                <a href="<?= e($link['href']) ?>"><?= e($link['label']) ?></a>
            <?php endforeach; ?>
            <a href="<?= e($site['resume']['href']) ?>">Resume <?= icon('arrow-up-right', 15) ?></a>
        </nav>
        <div class="mobile-menu__resume">
            <a class="btn btn--primary" href="<?= e($site['resume']['href']) ?>">
                <?= icon('download', 15) ?> Download resume
            </a>
        </div>
    </div>
</header>
