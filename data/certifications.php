<?php

declare(strict_types=1);

/**
 * Credentials. Presented hierarchically: the three selected credentials first,
 * then the Alibaba Cloud Academy series as a compact list.
 */

return [
    'heading' => 'Credentials',
    'title' => 'Certifications.',
    'lead' => 'Selected credentials up front; the cloud series below completes the set.',

    'featured' => [
        [
            'issuer' => 'TESDA',
            'title' => 'Developing Designs for User Interface',
            'date' => 'Aug 31, 2026',
            'context' => 'TESDA Online Program',
            'image' => '/images/certifications/tesda-developing-ui-thumb.webp',
            'href' => '/images/certifications/tesda-developing-ui.webp',
            'alt' => 'TESDA certificate for Developing Designs for User Interface',
        ],
        [
            'issuer' => 'ENCCULT XV',
            'title' => 'Technical Assistant, Philippine Working Group 15',
            'date' => 'Sep 26, 2025',
            'context' => 'XV National Meeting of Culture, Science, and Technology',
            'image' => '/images/certifications/encult-2025-philippine-working-group-15-thumb.webp',
            'href' => '/images/certifications/encult-2025-philippine-working-group-15.webp',
            'alt' => 'ENCCULT XV certificate recognizing Technical Assistant in Philippine Working Group 15',
        ],
        [
            'issuer' => 'PhilDev × Wells Fargo',
            'title' => 'SHE++ Masterclass on Alibaba Cloud System',
            'date' => 'Apr 25, 2025',
            'context' => 'Quezon City University',
            'image' => '/images/certifications/sheplusplus-masterclass-on-alibaba-cloud-system-thumb.webp',
            'href' => '/images/certifications/sheplusplus-masterclass-on-alibaba-cloud-system.webp',
            'alt' => 'SHE++ certificate of completion for the Masterclass on Alibaba Cloud System',
        ],
    ],

    'series' => [
        'issuer' => 'Alibaba Cloud Academy',
        'context' => 'Issued Apr 25, 2025 · valid until Apr 25, 2027',
        'items' => [
            ['title' => 'Introduction to APIs', 'href' => '/images/certifications/alibaba-cloud-introduction-to-apis.webp'],
            ['title' => 'Networking on the Cloud', 'href' => '/images/certifications/alibaba-cloud-networking-on-the-cloud.webp'],
            ['title' => 'Relational vs NoSQL databases', 'href' => '/images/certifications/alibaba-cloud-relational-vs-nosql-databases.webp'],
            ['title' => 'Security on the Cloud 1', 'href' => '/images/certifications/alibaba-cloud-security-on-the-cloud-1.webp'],
            ['title' => 'Security on the Cloud 2', 'href' => '/images/certifications/alibaba-cloud-security-on-the-cloud-2.webp'],
            ['title' => 'Compute on the Cloud', 'href' => '/images/certifications/alibaba-cloud-compute-on-the-cloud.webp'],
            ['title' => 'Data Management on the Cloud', 'href' => '/images/certifications/alibaba-cloud-data-management-on-the-cloud.webp'],
            ['title' => 'VPC Fundamentals', 'href' => '/images/certifications/alibaba-cloud-vpc-fundamentals.webp'],
            ['title' => 'Cloud Computing Basics', 'href' => '/images/certifications/alibaba-cloud-computing-basics.webp'],
            ['title' => 'Traditional IT vs Cloud Infrastructure', 'href' => '/images/certifications/alibaba-cloud-traditional-it-vs-cloud-infrastructure.webp'],
            ['title' => 'Cloud Deployment Models', 'href' => '/images/certifications/alibaba-cloud-deployment-models.webp'],
            ['title' => 'Accessing Alibaba Cloud Services', 'href' => '/images/certifications/alibaba-cloud-accessing-services.webp'],
        ],
    ],
];
