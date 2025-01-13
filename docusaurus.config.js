// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { inject } from "@vercel/analytics"
// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */

export default {
    title: 'Project Novato',
    tagline: 'Shield Humanity. Delete Novato.',
    favicon: 'img/logo.svg',

    // Set the production url of your site here
    url: 'https://novato.hadrianlau.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'udontur', // Usually your GitHub org/user name.
    projectName: 'novato', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                    // Please change this to your repo.
                    remarkPlugins: [remarkMath],
                    rehypePlugins: [rehypeKatex],
                    routeBasePath: '/', // Set this value to '/'.
                },
                blog: false,
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],
    stylesheets: [
        {
            href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
            type: 'text/css',
            integrity:
                'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
            crossorigin: 'anonymous',
        },
    ],
    plugins: [
        [
            'vercel-analytics',
            {
                debug: true,
                mode: 'auto',
            },
        ],
    ],
    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/docusaurus-social-card.jpg',
            navbar: {
                title: 'Project Novato',
                hideOnScroll: true,
                logo: {
                    alt: 'My Site Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        label: 'Bacteria',
                        to: '/category/bacteria',
                        position: 'left',
                    },
                    {
                        label: 'Eradication',
                        to: '/category/eradication',
                        position: 'left',
                    },
                    {
                        label: 'Microscope',
                        to: '/category/microscope',
                        position: 'left',
                    },
                    {
                        label: 'Strategies',
                        to: '/category/strategies',
                        position: 'left',
                    },
                    {
                        label: 'Citations',
                        to: '/citations',
                        position: 'left',
                    },
                    {
                        href: 'https://hadrianlau.com',
                        label: 'Hadrian',
                        position: 'right',
                    },
                    {
                        href: 'https://github.com/udontur/novato',
                        position: 'right',
                        className: 'header-github-link',
                        "aria-label": "GitHub repository",
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Web Pages',
                        items: [
                            {
                                label: 'Home Page',
                                to: '/',
                            },
                            {
                                label: 'Bacteria',
                                to: '/category/bacteria',
                            },
                            {
                                label: 'Eradication',
                                to: '/category/eradication',
                            },
                            {
                                label: 'Microscope',
                                to: '/category/microscope',
                            },
                            {
                                label: 'Strategies',
                                to: '/category/strategies',
                            },
                            {
                                label: 'Citations',
                                to: '/citations',
                            },
                        ],
                    },
                    {
                        title: 'Links',
                        items: [
                            {
                                label: 'Source Code',
                                href: 'https://github.com/udontur/novato',
                            },
                            {
                                label: 'Deployment',
                                href: 'https://vercel.com/udonturs-projects/novato/deployments',
                            },
                            {
                                label: 'Assignment',
                                href: 'https://classroom.google.com/u/0/c/NzAxMjgwMzgzNTE0/a/NzMzMTI2NTQ1MTc5/details',
                            },
                        ],
                    },
                    {
                        title: 'Socials',
                        items: [
                            {
                                label: 'Website',
                                href: 'https://hadrianlau.com',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/udontur',
                            },
                            {
                                label: 'Email',
                                href: 'mailto:102845@dsc.edu.hk',
                            },
                        ],
                    }
                ],
                copyright: `CopyIDontCare © ${new Date().getFullYear()} Hadrian Lau`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
};


