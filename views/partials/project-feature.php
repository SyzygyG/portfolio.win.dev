<?php

declare(strict_types=1);

/** Expected vars: $project (array), $variant ('default' | 'rev' | 'compact'), $splash (string). */

$variant = $variant ?? 'default';
$splash = $splash ?? 'splash--yellow';
$variantClass = match ($variant) {
    'rev' => 'feature feature--rev',
    'compact' => 'feature feature--compact',
    default => 'feature',
};

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
        <div class="splash <?= e($splash) ?>">
            <a class="shot" href="/projects/<?= e($project['slug']) ?>/"
               aria-label="<?= e($project['title'] . ' — view case study') ?>">
                <span class="shot__bar" aria-hidden="true">
                    <span class="shot__dot shot__dot--r"></span>
                    <span class="shot__dot shot__dot--y"></span>
                    <span class="shot__dot shot__dot--g"></span>
                    <span class="shot__url"><?= e($displayUrl) ?></span>
                </span>
                <span class="shot__frame">
                    <img src="<?= e($project['media']['src']) ?>"
                         srcset="<?= e($project['media']['small']) ?> 800w, <?= e($project['media']['src']) ?> 1600w"
                         sizes="(max-width: 900px) 100vw, 55vw"
                         width="<?= (int) $project['media']['width'] ?>"
                         height="<?= (int) $project['media']['height'] ?>"
                         alt="<?= e($project['media']['alt']) ?>"
                         loading="<?= $variant === 'rev' ? 'lazy' : 'eager' ?>" />
                </span>
            </a>
            <span class="shot-caption" aria-hidden="true"><?= e($project['caption']) ?></span>
        </div>
    </div>
    <div class="feature-body">
        <span class="feature-index"><?= e($project['index']) ?></span>
        <p class="feature-role"><?= e($project['role']) ?></p>
        <h3 class="feature-title">
            <a href="/projects/<?= e($project['slug']) ?>/"><?= e($project['title']) ?></a>
        </h3>
        <p class="feature-desc"><?= e($project['description'][0]) ?></p>

        <div class="project-meta">
            <?php foreach (array_slice($project['stack'], 0, 6) as $item): ?>
                <span class="tag"><?= e($item) ?></span>
            <?php endforeach; ?>
            <span class="tag"><?= e($project['year']) ?></span>
        </div>

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
