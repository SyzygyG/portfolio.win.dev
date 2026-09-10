<?php

declare(strict_types=1);

$site = require rootPath('data/site.php');
$profile = require rootPath('data/profile.php');
$projects = require rootPath('data/projects.php');
$experience = require rootPath('data/experience.php');
$skills = require rootPath('data/skills.php');
$certs = require rootPath('data/certifications.php');

$hero = $profile['hero'];
$variants = ['default', 'rev', 'compact'];
$tickerColors = ['c-yellow', 'c-pink', 'c-mint', 'c-sky', 'c-orange', 'c-teal'];

?>
<!-- Hero -->
<section class="hero">
    <div class="container">
        <div class="grid grid-cols-12 gap-x-6 gap-y-12 lg:items-end">
            <div class="col-span-12 lg:col-span-8">
                <p class="hero-kicker"><span class="dot" aria-hidden="true"></span><?= e($hero['eyebrow']) ?> · <?= e($site['location']) ?></p>
                <h1 class="hero-title">Hey, I'm Erwin.<br />
                    I build <span class="hl">web systems</span>, <span class="hl hl--pink">internal tools</span>
                    &amp; <span class="hl hl--mint squig-wrap"><span class="font-fancy">3D tours</span>
                    <?= icon('squiggle') ?></span>.
                </h1>
                <p class="hero-sub">Full-stack developer and project manager — from database to interface, and often the person keeping the team on track.</p>
                <div class="hero-actions">
                    <a class="btn btn--primary" href="/#work">
                        <?= e($hero['actions'][0]['label']) ?>
                        <span class="icon icon--move"><?= icon('arrow', 15) ?></span>
                    </a>
                    <a class="btn btn--ghost" href="<?= e($hero['actions'][1]['href']) ?>"
                       rel="noopener noreferrer" target="_blank">
                        <?= icon('document', 15) ?>
                        <?= e($hero['actions'][1]['label']) ?>
                    </a>
                </div>
                <div class="hero-badges">
                    <span class="sticker sticker--mint sticker--tilt">open to work <?= icon('sparkle', 14) ?></span>
                    <span class="sticker sticker--pink">full stack</span>
                    <span class="sticker sticker--sky sticker--tilt-r">project manager</span>
                </div>
            </div>
            <div class="col-span-12 sm:col-span-5 lg:col-span-3 lg:col-start-10">
                <figure class="polaroid tape">
                    <img src="<?= e($profile['about']['portrait']['src']) ?>"
                         width="480" height="480"
                         alt="<?= e($profile['about']['portrait']['alt']) ?>" />
                    <figcaption>hi, that's me!</figcaption>
                </figure>
                <p class="hand-note"><?= icon('arrow-doodle', 30) ?> psst — <?= e($site['location']) ?></p>
            </div>
        </div>

        <dl class="hero-facts">
            <div class="fact">
                <dt>Status</dt>
                <dd><?= e($hero['status']) ?></dd>
            </div>
            <div class="fact">
                <dt>Email</dt>
                <dd><a href="mailto:<?= e($site['email']) ?>"><?= e($site['email']) ?></a></dd>
            </div>
            <div class="fact">
                <dt>GitHub</dt>
                <dd><a href="<?= e($site['github']) ?>" rel="noopener noreferrer" target="_blank"><?= e($site['githubHandle']) ?></a></dd>
            </div>
            <div class="fact">
                <dt>LinkedIn</dt>
                <dd><a href="<?= e($site['linkedin']) ?>" rel="noopener noreferrer" target="_blank"><?= e($site['linkedinHandle']) ?></a></dd>
            </div>
        </dl>
    </div>
</section>

<!-- Tech marquee -->
<div class="marquee" aria-hidden="true">
    <div class="marquee__track">
        <?php
        $items = array_merge($profile['coreStack'], ['Full Stack', 'Project Manager', '3D Tours', 'CMS', 'Open to work']);
        foreach (array_merge($items, $items) as $i => $item):
            $c = $tickerColors[$i % count($tickerColors)];
        ?>
            <span class="marquee__item <?= $c ?>"><?= e($item) ?></span>
        <?php endforeach; ?>
    </div>
</div>

<!-- Work -->
<section class="section" id="work">
    <div class="container">
        <?= partial('section-head', [
            'index' => '01 · work',
            'title' => $projects['title'],
            'lead' => $projects['lead'],
            'tone' => 'pink',
        ]) ?>

        <div class="work-list">
            <?php foreach ($projects['items'] as $i => $project): ?>
                <?= partial('project-feature', [
                    'project' => $project,
                    'variant' => $variants[$i] ?? 'default',
                ]) ?>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Experience -->
<section class="section experience" id="experience">
    <div class="container">
        <?= partial('section-head', [
            'index' => '02 · experience',
            'title' => $experience['title'],
            'lead' => $experience['lead'],
            'tone' => 'mint',
        ]) ?>

        <?php foreach ($experience['groups'] as $group): ?>
            <p class="xp-label"><?= e($group['label']) ?></p>
            <div class="xp-list">
                <?php foreach ($group['entries'] as $entry): ?>
                    <article class="xp-item reveal">
                        <div class="xp-topline">
                            <span class="xp-period"><?= e($entry['period']) ?></span>
                            <span class="xp-type"><?= e($entry['type']) ?></span>
                        </div>
                        <h3 class="xp-role"><?= e($entry['role']) ?></h3>
                        <p class="xp-org"><?= e($entry['organization']) ?></p>
                        <p class="xp-desc"><?= e($entry['description']) ?></p>
                        <ul class="xp-achievements">
                            <?php foreach ($entry['achievements'] as $achievement): ?>
                                <li><?= e($achievement) ?></li>
                            <?php endforeach; ?>
                        </ul>
                    </article>
                <?php endforeach; ?>
            </div>
        <?php endforeach; ?>
    </div>
</section>

<!-- About + capabilities -->
<section class="section" id="about">
    <div class="container">
        <?= partial('section-head', [
            'index' => '03 · about',
            'title' => 'About',
            'lead' => $profile['about']['title'],
            'tone' => 'sky',
        ]) ?>

        <div class="grid grid-cols-12 gap-x-6 gap-y-12">
            <div class="col-span-12 lg:col-span-5 about-bio">
                <?php foreach ($profile['about']['paragraphs'] as $paragraph): ?>
                    <p><?= e($paragraph) ?></p>
                <?php endforeach; ?>
                <?php if (!empty($profile['about']['quote'])): ?>
                    <blockquote class="pull-quote">
                        <p><?= e($profile['about']['quote']) ?></p>
                    </blockquote>
                <?php endif; ?>
            </div>
            <div class="col-span-12 lg:col-span-5 lg:col-start-7">
                <dl class="fact-list">
                    <?php foreach ($profile['about']['facts'] as $fact): ?>
                        <div class="fact-row">
                            <dt><?= e($fact['label']) ?></dt>
                            <dd><?= e($fact['value']) ?></dd>
                        </div>
                    <?php endforeach; ?>
                </dl>

                <dl class="education">
                    <dt>Education</dt>
                    <dd>
                        <?= e($profile['education']['degree']) ?>,
                        <span><?= e($profile['education']['school']) ?> · <?= e($profile['education']['period']) ?></span>
                    </dd>
                </dl>
            </div>
        </div>

        <h3 class="subheading"><?= e($skills['title']) ?></h3>
        <div class="skill-grid">
            <?php
            $tones = ['pink', 'mint', 'sky', 'yellow', 'orange', 'teal'];
            foreach ($skills['groups'] as $i => $group):
                $tone = $tones[$i % count($tones)];
            ?>
                <div class="skill-group skill-group--<?= $tone ?>">
                    <h4 class="skill-label"><?= e($group['label']) ?></h4>
                    <p class="skill-items"><?= e(implode(', ', $group['items'])) ?></p>
                </div>
            <?php endforeach; ?>
        </div>

        <dl class="learning">
            <dt>Currently learning →</dt>
            <dd><?= e(implode(' · ', $skills['learning']['items'])) ?></dd>
        </dl>
    </div>
</section>

<!-- Credentials + resume -->
<section class="section" id="credentials">
    <div class="container">
        <?= partial('section-head', [
            'index' => '04 · credentials',
            'title' => $certs['title'],
            'lead' => $certs['lead'],
            'tone' => 'orange',
        ]) ?>

        <div class="cred-featured">
            <?php foreach ($certs['featured'] as $cert): ?>
                <article class="cert-card">
                    <a class="cert-card__media" href="<?= e($cert['href']) ?>"
                       rel="noopener noreferrer" target="_blank"
                       aria-label="Open certificate: <?= e($cert['title']) ?>">
                        <img src="<?= e($cert['image']) ?>" loading="lazy"
                             width="480" height="300" alt="<?= e($cert['alt']) ?>" />
                    </a>
                    <div class="cert-card__body">
                        <span class="cert-card__issuer"><?= e($cert['issuer']) ?></span>
                        <h3 class="cert-card__title"><?= e($cert['title']) ?></h3>
                        <p class="cert-card__date"><?= e($cert['date']) ?></p>
                        <a class="cert-card__verify" href="<?= e($cert['href']) ?>"
                           rel="noopener noreferrer" target="_blank">
                            View certificate <?= icon('arrow-up-right', 13) ?>
                        </a>
                    </div>
                </article>
            <?php endforeach; ?>
        </div>

        <div class="cert-series">
            <div class="cert-series__head">
                <span class="cert-series__issuer"><?= e($certs['series']['issuer']) ?></span>
                <span class="cert-series__context"><?= e($certs['series']['context']) ?></span>
            </div>
            <ul class="cert-list">
                <?php foreach ($certs['series']['items'] as $item): ?>
                    <li>
                        <a class="cert-link" href="<?= e($item['href']) ?>"
                           rel="noopener noreferrer" target="_blank">
                            <?= e($item['title']) ?>
                            <span class="icon"><?= icon('arrow-up-right', 14) ?></span>
                        </a>
                    </li>
                <?php endforeach; ?>
            </ul>
        </div>

        <div class="resume-block">
            <a class="resume-preview tape" href="<?= e($profile['resume']['download']['href']) ?>"
               rel="noopener noreferrer" target="_blank"
               aria-label="Open the resume PDF">
                <img src="<?= e($profile['resume']['preview']['src']) ?>" loading="lazy"
                     width="640" height="904" alt="<?= e($profile['resume']['preview']['alt']) ?>" />
            </a>
            <div>
                <h3 class="resume-title"><?= e($profile['resume']['title']) ?></h3>
                <p class="resume-lead"><?= e($profile['resume']['lead']) ?></p>
                <div class="resume-actions">
                    <a class="btn btn--primary" href="<?= e($profile['resume']['download']['href']) ?>" download>
                        <?= icon('download', 15) ?>
                        <?= e($profile['resume']['download']['label']) ?>
                    </a>
                    <a class="btn btn--ghost" href="<?= e($profile['resume']['open']['href']) ?>"
                       rel="noopener noreferrer" target="_blank">
                        <?= e($profile['resume']['open']['label']) ?>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Contact -->
<section class="contact" id="contact">
    <div class="container">
        <h2 class="contact-title">Have a role, project, or opportunity in mind?</h2>
        <p class="contact-lead">Open to full-time, hybrid, and flexible roles. Email is the fastest way to reach me.</p>

        <a class="contact-email squig-wrap" href="mailto:<?= e($site['email']) ?>">
            <?= e($site['email']) ?>
            <?= icon('squiggle') ?>
        </a>

        <ul class="contact-list">
            <li class="contact-item">
                <span class="icon"><?= icon('github', 18) ?></span>
                <a href="<?= e($site['github']) ?>" rel="noopener noreferrer" target="_blank">GitHub</a>
            </li>
            <li class="contact-item">
                <span class="icon"><?= icon('linkedin', 18) ?></span>
                <a href="<?= e($site['linkedin']) ?>" rel="noopener noreferrer" target="_blank">LinkedIn</a>
            </li>
            <li class="contact-item">
                <span class="icon"><?= icon('phone', 18) ?></span>
                <a href="<?= e($site['phoneHref']) ?>"><?= e($site['phone']) ?></a>
            </li>
        </ul>
    </div>
</section>
