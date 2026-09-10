<?php

declare(strict_types=1);

/** Expected vars: $project, $next, $all. */

$cs = $project['caseStudy'];
$stack = implode(' · ', $project['stack']);

?>
<article class="case">
    <header class="case-hero">
        <div class="container">
            <p class="case-kicker">
                case study <?= icon('sparkle', 12) ?> <?= e($project['index']) ?>
            </p>
            <h1 class="case-title"><?= e($cs['title']) ?></h1>
            <p class="case-subtitle"><?= e($cs['subtitle']) ?></p>
            <p class="case-lead"><?= e($cs['lead']) ?></p>
            <div class="case-links">
                <?php foreach ($cs['links'] as $link): ?>
                    <a class="link" href="<?= e($link['href']) ?>" rel="noopener noreferrer" target="_blank">
                        <?= e($link['label']) ?>
                        <span class="icon icon--diag"><?= icon('arrow-up-right', 14) ?></span>
                    </a>
                <?php endforeach; ?>
            </div>
        </div>
    </header>

    <div class="container">
        <div class="case-body">
            <div class="case-sections">
                <?php foreach ($cs['sections'] as $section): ?>
                    <section class="case-section">
                        <h2><?= e($section['heading']) ?></h2>
                        <?php if (!empty($section['paragraphs'])): ?>
                            <?php foreach ($section['paragraphs'] as $paragraph): ?>
                                <p><?= e($paragraph) ?></p>
                            <?php endforeach; ?>
                        <?php endif; ?>
                        <?php if (!empty($section['bullets'])): ?>
                            <ul>
                                <?php foreach ($section['bullets'] as $bullet): ?>
                                    <li><?= e($bullet) ?></li>
                                <?php endforeach; ?>
                            </ul>
                        <?php endif; ?>
                    </section>
                <?php endforeach; ?>
            </div>

            <aside class="case-aside">
                <div class="case-media tape">
                    <img src="<?= e($project['media']['src']) ?>"
                         srcset="<?= e($project['media']['small']) ?> 800w, <?= e($project['media']['src']) ?> 1600w"
                         sizes="(max-width: 900px) 100vw, 30vw"
                         width="<?= (int) $project['media']['width'] ?>"
                         height="<?= (int) $project['media']['height'] ?>"
                         alt="<?= e($project['media']['alt']) ?>" />
                </div>
                <dl>
                    <div class="meta-row">
                        <dt>Role</dt>
                        <dd><?= e($project['role']) ?></dd>
                    </div>
                    <div class="meta-row">
                        <dt>Year</dt>
                        <dd><?= e($project['year']) ?></dd>
                    </div>
                    <div class="meta-row">
                        <dt>Stack</dt>
                        <dd><?= e($stack) ?></dd>
                    </div>
                </dl>
            </aside>
        </div>

        <nav class="case-nav" aria-label="Project navigation">
            <a class="link" href="/#work">
                <span class="icon icon--back"><?= icon('arrow', 15) ?></span>
                All work
            </a>
            <a class="link" href="/projects/<?= e($next['slug']) ?>/">
                Next: <?= e($next['title']) ?>
                <span class="icon icon--move"><?= icon('arrow', 15) ?></span>
            </a>
        </nav>
    </div>
</article>
