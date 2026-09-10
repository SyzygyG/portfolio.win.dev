<?php

declare(strict_types=1);

/**
 * Selected work + case-study content. The projects are the primary proof of
 * technical competence, so each one carries enough depth for a dedicated page.
 */

return [
    'heading' => 'Work',
    'title' => 'Selected work',
    'lead' => 'Three systems I built or led, from a 3D virtual tour to a publishing platform.',

    'items' => [
        [
            'slug' => 'hytec-power-virtual-tour',
            'index' => '01',
            'title' => 'Hytec Power Inc. Virtual Tour',
            'role' => 'Full Stack Developer — 3D Virtual Tour & CMS',
            'year' => '2026',
            'caption' => 'Walk through Hytec\'s facilities in 3D, straight from the browser.',
            'summary' => 'An interactive 3D tour of Hytec Power Inc.\'s facilities, with a Laravel CMS behind it.',
            'description' => [
                'A 3D virtual tour of Hytec Power Inc. built with Google Model Viewer and Photo Sphere Viewer, presenting an interactive classroom environment. A Laravel content management system sits behind the experience so tour content stays maintainable.',
            ],
            'stack' => ['Google Model Viewer', 'Photo Sphere Viewer', 'Angular', 'Laravel', 'PHP'],
            'links' => [
                ['label' => 'Open the tour', 'href' => 'https://virtual-tour.e-hytec.dev/tour', 'kind' => 'external'],
                ['label' => 'Case study', 'href' => '/projects/hytec-power-virtual-tour/', 'kind' => 'internal'],
            ],
            'media' => [
                'src' => '/images/projects/hytec-virtual-tour.webp',
                'small' => '/images/projects/hytec-virtual-tour-800.webp',
                'width' => 1600,
                'height' => 900,
                'alt' => 'Hytec Power Inc. virtual tour scene showing the interactive classroom environment',
            ],
            'caseStudy' => [
                'title' => 'Hytec Power Inc. Virtual Tour',
                'subtitle' => 'Full Stack Developer — 3D Virtual Tour & CMS · 2026 · Internship',
                'lead' => 'An immersive 3D tour of Hytec Power Inc. backed by a Laravel content management system, built during an internship deployment.',
                'sections' => [
                    [
                        'heading' => 'What it is',
                        'paragraphs' => [
                            'The Hytec Power Inc. virtual tour is an interactive 3D experience that presents the company\'s facilities — including an interactive classroom environment — through a browser. Visitors move through scenes rendered with Photo Sphere Viewer and Google Model Viewer rather than static images.',
                            'Alongside the tour, I built the content management system that powers it, plus an improved company website, so the people at Hytec could keep the experience and its information current without touching code.',
                        ],
                    ],
                    [
                        'heading' => 'My role',
                        'paragraphs' => [
                            'I developed the tour and the supporting CMS as a full stack developer during my internship at Hytec Power Inc. That meant working on the immersive front end and the content layer behind it, and making both ready for deployment.',
                        ],
                        'bullets' => [
                            'Built the interactive 3D tour features for internship deployment',
                            'Worked with Photo Sphere Viewer and Google Model Viewer for immersive presentation',
                            'Used Laravel to support the tour\'s content management needs',
                            'Designed the improved company website with an Angular + Laravel CMS',
                        ],
                    ],
                    [
                        'heading' => 'How it is put together',
                        'paragraphs' => [
                            'The experience has two layers. The visitor-facing tour combines Photo Sphere Viewer for 360° panoramas with Google Model Viewer for interactive 3D models. Behind it, a Laravel application manages the scenes and content that the tour presents.',
                            'The companion website follows the same pattern: Angular for the interface and Laravel for the CMS that keeps business information and status updates consistent.',
                        ],
                    ],
                    [
                        'heading' => 'Technology',
                        'bullets' => [
                            'Google Model Viewer — interactive 3D model display',
                            'Photo Sphere Viewer — 360° panorama navigation',
                            'Angular — front-end interfaces',
                            'Laravel (PHP) — content management system',
                        ],
                    ],
                    [
                        'heading' => 'Where it lives',
                        'paragraphs' => [
                            'The tour is deployed and publicly reachable at virtual-tour.e-hytec.dev/tour.',
                        ],
                    ],
                ],
                'links' => [
                    ['label' => 'Open the tour', 'href' => 'https://virtual-tour.e-hytec.dev/tour', 'kind' => 'external'],
                ],
            ],
        ],
        [
            'slug' => 'videre',
            'index' => '02',
            'title' => 'VIDERE',
            'role' => 'Project Manager — Digital Art Platform',
            'year' => '2025',
            'caption' => 'Create, share, sell, and collaborate — one art platform.',
            'summary' => 'A digital art platform for creating, sharing, selling, and collaborating on artwork.',
            'description' => [
                'A digital art platform built across a React/Vite frontend, a Node.js/Express API, and a Python/Flask ML service — bringing marketplace flows, commissions, collaborative canvases, and recommendations into one ecosystem.',
            ],
            'stack' => ['React', 'Vite', 'Node.js', 'Express', 'Python', 'Flask', 'MongoDB Atlas', 'PayMongo'],
            'links' => [
                ['label' => 'Live demo', 'href' => 'https://viderevision.vercel.app/', 'kind' => 'external'],
                ['label' => 'GitHub', 'href' => 'https://github.com/SyzygyG/Videre', 'kind' => 'external'],
                ['label' => 'Case study', 'href' => '/projects/videre/', 'kind' => 'internal'],
            ],
            'media' => [
                'src' => '/images/projects/videre-preview.webp',
                'small' => '/images/projects/videre-preview-800.webp',
                'width' => 1368,
                'height' => 1000,
                'alt' => 'VIDERE interface preview showing the platform workspace and content areas',
            ],
            'caseStudy' => [
                'title' => 'VIDERE',
                'subtitle' => 'Project Manager — Digital Art Platform',
                'lead' => 'A digital art platform that combines creation, collaboration, discovery, and commerce in one connected experience.',
                'sections' => [
                    [
                        'heading' => 'Overview',
                        'paragraphs' => [
                            'VIDERE is a digital art platform where artists create, share, sell, and collaborate on artwork. It combines social features, creative tools, and commerce flows into a single product.',
                            'Rather than stopping at a standard marketplace, the platform supports artist collaboration, commission workflows, buyer discovery, and ML-assisted recommendations in the same ecosystem.',
                        ],
                        'bullets' => [
                            'Collaborative ArtSpace canvas with layers, tools, and real-time sync',
                            'Social posting, follows, likes, comments, and direct messaging',
                            'Marketplace, shopping cart, and commission flows',
                            'Artist portfolios and buyer-side discovery features',
                        ],
                    ],
                    [
                        'heading' => 'My role',
                        'paragraphs' => [
                            'I led the project as a full stack platform effort spanning frontend, backend, infrastructure, and ML service boundaries. The work required balancing product direction with technical execution across a broad feature set.',
                            'The platform demanded coordination across social experiences, commerce flows, real-time interactions, and recommendation systems rather than a single isolated application layer.',
                        ],
                        'bullets' => [
                            'Directed development of the platform',
                            'Worked across product, technical, and integration priorities',
                            'Coordinated a platform with social, commerce, and ML-backed features',
                        ],
                    ],
                    [
                        'heading' => 'Architecture',
                        'paragraphs' => [
                            'VIDERE uses a three-service architecture: a React/Vite frontend, a Node.js/Express backend, and a Python/Flask ML microservice. Supporting services include MongoDB Atlas for persistence, Cloudinary for image storage, and PayMongo for payments.',
                            'The platform also integrates Socket.io for real-time communication, JWT-based authentication, Google OAuth, Cloudinary uploads, and email-based flows for OTP and notifications.',
                        ],
                        'bullets' => [
                            'React + Vite — frontend',
                            'Node.js + Express — backend API',
                            'Python + Flask — ML microservice',
                            'MongoDB Atlas, Cloudinary, PayMongo — supporting services',
                            'Socket.io, JWT, Google OAuth — realtime & auth',
                        ],
                    ],
                    [
                        'heading' => 'Platform capabilities',
                        'bullets' => [
                            'Collaborative drawing canvas',
                            'Marketplace and checkout with PayMongo',
                            'Commission management',
                            'Portfolio showcase and artwork discovery',
                            'Real-time social interaction features',
                        ],
                    ],
                    [
                        'heading' => 'ML & recommendation layer',
                        'paragraphs' => [
                            'VIDERE includes recommendation work and hash-based plagiarism detection as part of its ML layer. The system combines MobileNetV2 embeddings, collaborative filtering, FAISS candidate retrieval, and K-Means clustering to support artwork and creator recommendations.',
                        ],
                        'bullets' => [
                            'MobileNetV2 embeddings for artwork features',
                            'Collaborative filtering + FAISS candidate retrieval',
                            'K-Means clustering for recommendations',
                            'Hash-based plagiarism detection',
                        ],
                    ],
                ],
                'links' => [
                    ['label' => 'Live demo', 'href' => 'https://viderevision.vercel.app/', 'kind' => 'external'],
                    ['label' => 'GitHub', 'href' => 'https://github.com/SyzygyG/Videre', 'kind' => 'external'],
                ],
            ],
        ],
        [
            'slug' => 'qcu-journals',
            'index' => '03',
            'title' => 'QCU Journals',
            'role' => 'Full Stack Developer — Academic Publishing Platform',
            'year' => '2025',
            'caption' => 'Peer-reviewed journals, from submission to indexing.',
            'summary' => 'A scholarly journal platform for Quezon City University, built on PKP Open Journal Systems.',
            'description' => [
                'The publishing platform for Quezon City University\'s peer-reviewed journals, built on PKP Open Journal Systems to streamline submission, peer review, editing, and indexing workflows.',
            ],
            'stack' => ['PKP Open Journal Systems', 'PHP', 'Academic publishing', 'Workflow management'],
            'links' => [
                ['label' => 'Visit qcujournals.com', 'href' => 'https://qcujournals.com/', 'kind' => 'external'],
                ['label' => 'Case study', 'href' => '/projects/qcu-journals/', 'kind' => 'internal'],
            ],
            'media' => [
                'src' => '/images/projects/qcu-journals-preview.webp',
                'small' => '/images/projects/qcu-journals-preview-800.webp',
                'width' => 1600,
                'height' => 900,
                'alt' => 'QCU Journals preview showing the academic publishing platform interface',
            ],
            'caseStudy' => [
                'title' => 'QCU Journals',
                'subtitle' => 'Full Stack Developer — Academic Publishing Platform',
                'lead' => 'A peer-reviewed journal platform for Quezon City University, built on PKP Open Journal Systems.',
                'sections' => [
                    [
                        'heading' => 'Overview',
                        'paragraphs' => [
                            'QCU Journals is the publishing platform for Quezon City University\'s scholarly, peer-reviewed journals. Built on PKP Open Journal Systems, it manages submissions, peer review, editing, and indexing in one place.',
                        ],
                    ],
                    [
                        'heading' => 'My role',
                        'paragraphs' => [
                            'I developed the platform as a full stack developer, configuring and extending PKP Open Journal Systems to fit QCU\'s publishing workflow.',
                        ],
                        'bullets' => [
                            'Supported journal management through PKP Open Journal Systems',
                            'Helped improve process flow for submission, review, and editing',
                            'Contributed to indexing readiness for Google and DOI workflows',
                        ],
                    ],
                    [
                        'heading' => 'Technology',
                        'bullets' => [
                            'PKP Open Journal Systems — publishing platform',
                            'PHP — platform customization',
                            'Submission, peer review, editing, and indexing workflows',
                        ],
                    ],
                    [
                        'heading' => 'Where it lives',
                        'paragraphs' => [
                            'The platform is live at qcujournals.com.',
                        ],
                    ],
                ],
                'links' => [
                    ['label' => 'Visit qcujournals.com', 'href' => 'https://qcujournals.com/', 'kind' => 'external'],
                ],
            ],
        ],
    ],
];
