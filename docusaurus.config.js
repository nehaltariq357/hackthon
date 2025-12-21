// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AI Robotics Textbook',
  tagline: 'Physical AI & Humanoid Robotics Course',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://nehaltariq357.github.io',
  // url: 'https://waqar-computer.github.io',
  // Set the /<base>/ pathname under which your site is served
  // For GitHub Pages, this is usually '/<project-name>/'
  // baseUrl: '/hackthon/',
  baseUrl:'/',

  // GitHub pages deployment config.
  organizationName: 'nehaltariq357', // Usually your GitHub org/user name.
  projectName: 'hackthon', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/waqar-computer/hackthon/tree/master/',
          editUrl: 'https://github.com/nehaltariq357/hackthon/tree/master/',
        },
        blog: false, // Disable blog for textbook
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    // Tailwind CSS is integrated via postcss
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'AI Robotics Textbook',
        logo: {
          alt: '',
          src: '/img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'textbookSidebar',
            position: 'left',
            label: 'Textbook',
          },
          {
            href: 'https://github.com/waqar-computer/hackthon',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Textbook',
            items: [
              {
                label: 'Module 1: ROS 2',
                to: '/docs/module-1-ros2',
              },
              {
                label: 'Module 2: Digital Twin',
                to: '/docs/module-2-digital-twin',
              },
              {
                label: 'Module 3: NVIDIA Isaac',
                to: '/docs/module-3-nvidia-isaac',
              },
              {
                label: 'Module 4: VLA',
                to: '/docs/module-4-vla',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/waqar-computer/hackthon',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AI Robotics Textbook. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['python', 'bash', 'json'],
      },
    }),
};

export default config;