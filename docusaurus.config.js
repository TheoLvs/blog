module.exports = {
  title: 'Emergence.pub',
  tagline: 'Experiments on Machine Learning & Simulations',
  url: 'https://theolvs.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'TheoLvs', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
    },
    colorMode: {
      // "light" | "dark"
      defaultMode: 'dark',

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: true,

      // // Should we use the prefers-color-scheme media-query,
      // // using user system preferences, instead of the hardcoded defaultMode
      // respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'EMERGENCE.PUB',
      // logo: {
      //   alt: 'My Site Logo',
      //   // src: 'img/logo3.png',
      // },
      items: [

        {to: 'blog', label: 'Blog', position: 'left'},
        {to: 'opensource/', label: 'Open Source', position: 'left'},
        {to: 'about/', label: 'About', position: 'left'},
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Resources',
          position: 'left',
        },
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
  stylesheets:[
    {
      href: 'https://fonts.googleapis.com/css?family=Roboto:400,400i,700',
      type: 'text/css',
    }
  ],
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
          customCss:require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
