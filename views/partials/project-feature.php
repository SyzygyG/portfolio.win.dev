<?php

declare(strict_types=1);

/** Expected vars: $project (array), $variant ('default' | 'rev' | 'compact'). */

$variant = $variant ?? 'default';
$variantClass = match ($variant) {
    'rev' => 'feature feature--rev',
    'compact' => 'feature feature--compact',
    default => 'feature',
};

$stack = implode(' · ', $project['stack']);

// Derive a short display URL for the browser-window chrome.
$firstExternal = null;
foreach ($project['links'] as $link) {
    if ($link['kind'] === 'external') {
        $firstExternal = $link['href'];
        break;
    }
}
$displayUrl = $firstExternal
    ? preg_replace('#^https?://#', '', $firstExternal)
    : 'portfolio.erwin.dev/projects/' . $project['slug'];

?>
<article class="<?= $variantClass ?> reveal">
    <div class="feature-media">
        <a class="media-window" href="/projects/<?= e($project['slug']) ?>/"
           aria-label="<?= e($project['title'] . ' — view case study') ?>">
            <div class="media-window__bar" aria-hidden="true">
                <span class="media-window__dot"></span>
                <span class="media-window__dot"></span>
                <span class="media-window__dot"></span>
                <span class="media-window__url"><?= e($displayUrl) ?></span>
            </div>
            <img src="<?= e($project['media']['src']) ?>"
                 srcset="<?= e($project['media']['small']) ?> 800w, <?= e($project['media']['src']) ?> 1600w"
                 sizes="(max-width: 900px) 100vw, 55vw"
                 width="<?= (int) $project['media']['width'] ?>"
                 height="<?= (int) $project['media']['height'] ?>"
                 alt="<?= e($project['media']['alt']) ?>"
                 loading="<?= $variant === 'rev' ? 'lazy' : 'eager' ?>" />
        </a>
    </div>
    <div class="feature-body">
        <span class="feature-index"><?= e($project['index']) ?></span>
        <p class="feature-role"><?= e($project['role']) ?></p>
        <h3 class="feature-title">
            <a href="/projects/<?= e($project['slug']) ?>/"><?= e($project['title']) ?></a>
        </h3>
        <p class="feature-desc"><?= e($project['description'][0]) ?></p>

        <dl class="feature-meta">
            <div class="meta-row">
                <dt>Stack</dt>
                <dd><?= e($stack) ?></dd>
            </div>
            <div class="meta-row">
                <dt>Year</dt>
                <dd><?= e($project['year']) ?></dd>
            </div>
        </dl>

        <div class="feature-links">
            <?php foreach ($project['links'] as $link): ?>
                <?php if ($link['kind'] === 'internal'): ?>
                    <a class="link" href="<?= e($link['href']) ?>">
                        <?= e($link['label']) ?>
                        <span class="icon icon--move"><?= icon('arrow', 15) ?></span>
                    </a>
                <?php else: ?>
                    <a class="link" href="<?= e($link['href']) ?>" rel="noopener noreferrer" target="_blank">
                        <?= e($link['label']) ?>
                        <span class="icon icon--diag"><?= icon('arrow-up-right', 14) ?></span>
                    </a>
                <?php endif; ?>
            <?php endforeach; ?>
        </div>
    </div>
</article>
