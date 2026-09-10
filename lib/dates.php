<?php

declare(strict_types=1);

/**
 * Date formatting for the current year (footer) — the only runtime date.
 */
function currentYear(): int
{
    return (int) date('Y');
}
