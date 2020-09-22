module.exports = {
  title: 'TheoLvs',
  tagline: 'Blogging about Data Science & Machine Learning',
  url: 'https://theolvs.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/circle-outline-32.ico',
  organizationName: 'TheoLvs', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'TheoLvs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/circle-outline-128.png',
      },
      items: [
        // {
        //   to: 'docs/',
        //   activeBasePath: 'docs',
        //   label: 'Docs',
        //   position: 'left',
        // },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/theolvs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Style Guide',
        //       to: 'docs/',
        //     },
        //     {
        //       label: 'Second Doc',
        //       to: 'docs/doc2/',
        //     },
        //   ],
        // },
        {
          title: 'Social',
          items: [
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/in/th%C3%A9o-alves-da-costa-09397a82/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/theolvsdc',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/theolvs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Théo Alves Da Costa`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
