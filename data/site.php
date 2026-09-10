<?php

declare(strict_types=1);

/**
 * Site-wide facts: identity, contact, social links, navigation, footer.
 * Single source of truth for anything that is not page-specific.
 */

return [
    'name' => 'Erwin Gamaliel Gamalong',
    'shortName' => 'Erwin Gamalong',
    'role' => 'Full Stack Developer & Project Manager',
    'location' => 'Quezon City, Philippines',
    'email' => 'gamalonggamalielerwin@gmail.com',
    'phone' => '+63 950 827 0857',
    'phoneHref' => 'tel:+639508270857',
    'linkedin' => 'https://linkedin.com/in/gamalongerwin/',
    'linkedinHandle' => 'linkedin.com/in/gamalongerwin',
    'github' => 'https://github.com/SyzygyG',
    'githubHandle' => 'github.com/SyzygyG',
    'url' => 'https://portfolio.erwin.dev',

    'nav' => [
        ['label' => 'Work', 'href' => '/#work'],
        ['label' => 'Experience', 'href' => '/#experience'],
        ['label' => 'About', 'href' => '/#about'],
    ],

    'resume' => [
        'href' => '/documents/resume.pdf',
        'preview' => '/images/resume-preview.webp',
        'label' => 'Download resume',
    ],

    'contact' => [
        [
            'label' => 'Email',
            'value' => 'gamalonggamalielerwin@gmail.com',
            'href' => 'mailto:gamalonggamalielerwin@gmail.com',
            'icon' => 'mail',
        ],
        [
            'label' => 'LinkedIn',
            'value' => 'linkedin.com/in/gamalongerwin',
            'href' => 'https://linkedin.com/in/gamalongerwin/',
            'icon' => 'linkedin',
            'external' => true,
        ],
        [
            'label' => 'GitHub',
            'value' => 'github.com/SyzygyG',
            'href' => 'https://github.com/SyzygyG',
            'icon' => 'github',
            'external' => true,
        ],
        [
            'label' => 'Phone',
            'value' => '+63 950 827 0857',
            'href' => 'tel:+639508270857',
            'icon' => 'phone',
        ],
    ],
];
