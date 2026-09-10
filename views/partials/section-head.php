<?php

declare(strict_types=1);

/** Expected vars: $index (string), $title (string), $lead (string|null), $tone (string|null). */

$tone = $tone ?? 'yellow';
$toneClass = match ($tone) {
    'pink' => 'section-index--pink',
    'mint' => 'section-index--mint',
    'sky' => 'section-index--sky',
    'orange' => 'section-index--orange',
    default => '',
};

?>
<div class="section-head">
    <span class="section-index <?= $toneClass ?>"><?= e($index) ?></span>
    <h2 class="section-title"><?= e($title) ?></h2>
    <?php if (!empty($lead)): ?>
        <p class="section-lead"><?= e($lead) ?></p>
    <?php endif; ?>
</div>
