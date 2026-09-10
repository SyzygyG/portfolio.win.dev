<?php

declare(strict_types=1);

/** Expected vars: $site. */

?>
<footer class="site-footer">
    <div class="container footer-inner">
        <span>© <?= currentYear() ?> <?= e($site['name']) ?></span>
        <span>Built with PHP &amp; Tailwind CSS</span>
        <nav class="footer-links" aria-label="Footer">
            <a href="<?= e($site['github']) ?>" rel="noopener noreferrer" target="_blank">GitHub</a>
            <a href="<?= e($site['linkedin']) ?>" rel="noopener noreferrer" target="_blank">LinkedIn</a>
            <a href="mailto:<?= e($site['email']) ?>">Email</a>
        </nav>
    </div>
</footer>
