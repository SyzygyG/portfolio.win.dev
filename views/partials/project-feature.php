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

?>
<article class="<?= $variantClass ?> reveal">
    <div class="feature-media">
        <a class="feature-img" href="<?= e($project['caseStudy'] ? '/projects/' . $project['slug'] . '/' : ($project['links'][0]['href'] ?? '#')) ?>"
           aria-label="<?= e($project['title'] . ' — view case study') ?>">
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
