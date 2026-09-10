<?php

declare(strict_types=1);

/**
 * HTML shell: head, navigation, main content, footer.
 *
 * Expected vars: $page (meta), $site (site facts), $content (HTML), $currentPath.
 */

$ogImage = '/images/og.png';

?>
<!doctype html>
<html lang="en" class="no-js">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title><?= e($page['title']) ?></title>
    <meta name="description" content="<?= e($page['description']) ?>" />
    <link rel="canonical" href="<?= e($page['canonical']) ?>" />

    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="<?= e($site['name']) ?>" />
    <meta property="og:title" content="<?= e($page['title']) ?>" />
    <meta property="og:description" content="<?= e($page['description']) ?>" />
    <meta property="og:url" content="<?= e($page['canonical']) ?>" />
    <meta property="og:image" content="<?= e($site['url'] . $ogImage) ?>" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="<?= e($page['title']) ?>" />
    <meta name="twitter:description" content="<?= e($page['description']) ?>" />
    <meta name="twitter:image" content="<?= e($site['url'] . $ogImage) ?>" />

    <meta name="theme-color" content="#fbf4e8" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "<?= e($site['name']) ?>",
      "alternateName": "Erwin Gamalong",
      "url": "<?= e($site['url']) ?>/",
      "image": "<?= e($site['url']) ?>/images/erwin-headshot.webp",
      "jobTitle": "<?= e($site['role']) ?>",
      "email": "mailto:<?= e($site['email']) ?>",
      "telephone": "<?= e($site['phone']) ?>",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Quezon City",
        "addressRegion": "Metro Manila",
        "addressCountry": "PH"
      },
      "sameAs": [
        "<?= e($site['github']) ?>",
        "<?= e($site['linkedin']) ?>"
      ]
    }
    </script>

    <link rel="preload" href="/fonts/bricolage-var.woff2" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="/fonts/archivo-var.woff2" as="font" type="font/woff2" crossorigin />
    <link rel="stylesheet" href="/assets/main.css" />

    <script>document.documentElement.classList.replace('no-js', 'js');</script>
</head>
<body>
    <a class="skip-link" href="#main">Skip to content</a>

    <?= partial('nav', ['site' => $site, 'currentPath' => $currentPath]) ?>

    <main id="main">
        <?= $content ?>
    </main>

    <?= partial('footer', ['site' => $site]) ?>

    <script src="/assets/main.js" defer></script>
</body>
</html>
