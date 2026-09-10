<?php

declare(strict_types=1);

/**
 * Professional experience, grouped for scannability: engineering first,
 * then leadership and community work.
 */

return [
    'heading' => 'Experience',
    'title' => 'Where I\'ve worked.',
    'lead' => 'Internships and project roles, plus student leadership alongside the technical work.',

    'groups' => [
        [
            'label' => 'Engineering',
            'entries' => [
                [
                    'organization' => 'Hytec Power Inc.',
                    'role' => 'Full Stack Developer — Virtual Tour & CMS',
                    'period' => '2026',
                    'type' => 'Internship',
                    'description' => 'Built the Hytec Power Inc. 3D virtual tour and the content management system behind it.',
                    'achievements' => [
                        'Created the 3D virtual tour using Google Model Viewer and Photo Sphere Viewer',
                        'Built interactive tour features for internship deployment',
                        'Used Laravel to support the tour\'s content management needs',
                    ],
                ],
                [
                    'organization' => 'Hytec Power Inc.',
                    'role' => 'Full Stack Developer — Website & CMS',
                    'period' => '2026',
                    'type' => 'Internship',
                    'description' => 'Designed an improved Hytec Power Inc. website with a CMS to keep content current and consistent.',
                    'achievements' => [
                        'Worked with Angular and Laravel in an internship environment',
                        'Focused on maintainable content updates through CMS functionality',
                        'Improved consistency of business information and status updates',
                    ],
                ],
                [
                    'organization' => 'Quezon City University',
                    'role' => 'Full Stack Developer — QCU Journals',
                    'period' => '2025',
                    'type' => 'Project',
                    'description' => 'Developed the university\'s peer-reviewed journal platform on PKP Open Journal Systems.',
                    'achievements' => [
                        'Supported journal management through PKP Open Journal Systems',
                        'Improved the submission, review, and editing process flow',
                        'Contributed to indexing readiness for Google and DOI workflows',
                    ],
                ],
            ],
        ],
        [
            'label' => 'Leadership & community',
            'entries' => [
                [
                    'organization' => 'QCU Supreme Student Council',
                    'role' => 'Grievance Committee — Council of Leader',
                    'period' => '2024 — Present',
                    'type' => 'Student leadership',
                    'description' => 'Served in a council leadership role supporting grievance-related committee responsibilities alongside academic and technical work.',
                    'achievements' => [
                        'Contributed to student leadership and committee coordination',
                        'Worked across organizational responsibilities in a council setting',
                        'Strengthened communication and coordination beyond software projects',
                    ],
                ],
                [
                    'organization' => 'QCU Supreme Student Council',
                    'role' => 'Membership Committee — Council of Leader',
                    'period' => '2023 — 2024',
                    'type' => 'Student leadership',
                    'description' => 'Supported membership-related council responsibilities and organizational coordination within the student leadership structure.',
                    'achievements' => [
                        'Handled committee participation in student council initiatives',
                        'Built coordination experience through leadership responsibilities',
                        'Balanced organizational duties with technical and academic commitments',
                    ],
                ],
            ],
        ],
    ],
];
