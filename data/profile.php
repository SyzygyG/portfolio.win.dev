<?php

declare(strict_types=1);

/**
 * Identity, hero, about, education, and resume facts.
 */

return [
    'hero' => [
        'eyebrow' => 'Full Stack Developer & Project Manager',
        'name' => 'Erwin Gamalong',
        'lead' => 'I build web platforms, internal tools, and immersive 3D tours — from database to interface, and often as the person keeping the team on track.',
        'leadEmphasis' => 'web platforms, internal tools, and immersive 3D tours',
        'status' => 'Open to full-time, hybrid, and flexible roles',
        'actions' => [
            [
                'label' => 'View selected work',
                'href' => '/#work',
                'variant' => 'primary',
                'icon' => 'arrow',
            ],
            [
                'label' => 'View resume',
                'href' => '/documents/resume.pdf',
                'variant' => 'ghost',
                'icon' => 'document',
                'external' => true,
            ],
        ],
    ],

    'coreStack' => [
        'React', 'PHP', 'Python', '.NET', 'Flutter', 'Node.js',
        'Firebase', 'Oracle Database', 'MongoDB', 'MySQL', 'Tailwind CSS',
    ],

    'about' => [
        'heading' => 'About',
        'title' => 'A developer who ships, and a manager who keeps the room aligned.',
        'paragraphs' => [
            "I'm Erwin Gamaliel Gamalong, a full stack developer and project manager in Quezon City. I've built web platforms, mobile applications, content management systems, and immersive virtual environments — across internships, academic work, and project leadership roles.",
            'I work across React, PHP, Python, .NET, Flutter, Firebase, and Oracle, and I lead teams building standalone, web, and mobile applications using Agile methods. I coordinate, communicate clearly, and trust the people on the team to own their work.',
        ],
        'quote' => 'I\'m a firm believer in laissez-faire leadership and trusting each individual on the team.',
        'statement' => [
            ['text' => "I'm Erwin Gamaliel Gamalong — a "],
            ['text' => 'full stack developer', 'hl' => 'yellow'],
            ['text' => ' and '],
            ['text' => 'project manager', 'hl' => 'pink'],
            ['text' => ' in Quezon City. I\'ve built '],
            ['text' => 'web platforms', 'hl' => 'mint'],
            ['text' => ', '],
            ['text' => 'mobile applications', 'hl' => 'sky'],
            ['text' => ', '],
            ['text' => 'content management systems', 'hl' => 'orange'],
            ['text' => ', and '],
            ['text' => 'immersive virtual environments', 'hl' => 'teal', 'fancy' => true],
            ['text' => ' — across internships, academic work, and project leadership roles.'],
        ],
        'interests' => [
            'Web development',
            'Mobile applications',
            'Content management systems',
            'Workflow efficiency',
            'Team leadership',
            'Software quality',
        ],
        'approach' => [
            ['title' => 'Agile methods', 'text' => 'I lead teams building standalone, web, and mobile applications with Agile.'],
            ['title' => 'Clear communication', 'text' => 'I coordinate across roles and keep everyone pointed at the same goal.'],
            ['title' => 'Trust the team', 'text' => 'I believe in laissez-faire leadership and trusting each individual.'],
        ],
        'facts' => [
            ['label' => 'Location', 'value' => 'Quezon City, Philippines'],
            ['label' => 'Degree', 'value' => 'B.S. Information Technology, Quezon City University'],
            ['label' => 'Graduating', 'value' => 'June 2026'],
            ['label' => 'Status', 'value' => 'Open to full-time, hybrid, and flexible roles'],
        ],
        'portrait' => [
            'src' => '/images/erwin-headshot.webp',
            'alt' => 'Portrait of Erwin Gamaliel Gamalong',
        ],
    ],

    'education' => [
        'degree' => 'B.S. Information Technology',
        'school' => 'Quezon City University',
        'period' => 'Graduating June 2026',
    ],

    'resume' => [
        'heading' => 'Resume',
        'title' => 'One page, ready to share.',
        'lead' => 'Education, leadership, internships, and selected technical work — the full document.',
        'preview' => [
            'src' => '/images/resume-preview.webp',
            'alt' => 'Preview of the first page of the resume',
        ],
        'download' => [
            'label' => 'Download PDF',
            'href' => '/documents/resume.pdf',
        ],
        'open' => [
            'label' => 'Open in new tab',
            'href' => '/documents/resume.pdf',
        ],
    ],
];
