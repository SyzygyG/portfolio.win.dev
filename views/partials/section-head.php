<?php

declare(strict_types=1);

/** Expected vars: $index (string), $title (string), $lead (string|null), $id (string|null). */

?>
<div class="section-head">
    <div class="grid grid-cols-12 gap-x-6 gap-y-3">
        <span class="section-index col-span-12 lg:col-span-2"><?= e($index ?? '') ?></span>
        <div class="col-span-12 lg:col-span-9 lg:col-start-4">
            <h2 class="section-title"<?= isset($id) ? ' id="' . e($id) . '"' : '' ?>><?= e($title) ?></h2>
            <?php if (!empty($lead)): ?>
                <p class="section-lead"><?= e($lead) ?></p>
            <?php endif; ?>
        </div>
    </div>
</div>
