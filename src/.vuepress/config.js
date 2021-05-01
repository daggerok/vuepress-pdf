const base = process.env.BASE || '/';

module.exports = {
  base,
  title: 'VuePress diagrams howto',
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  extend: '@vuepress/theme-default',
  // theme: 'default-prefers-color-scheme',
  theme: 'cool',
  displayAllHeaders: true,
  editLinks: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': '../img',
      },
    },
  },
  themeConfig: {
    repo: 'daggerok/vuepress-pdf',

    smoothScroll: true,

    lastUpdated: 'Last updated',
    editLinks: false,
    editLinkText: 'Improve!',

    displayAllHeaders: true, // Default: false
    sidebarDepth: 2,
    collapsable: false,
    sidebar: {
      '/': [
        '',
        'mermaid',
        'uml',
        'charts',
        'math',
        'developer-guide',
      ],
    },
  },
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-vuepress-code-snippet-enhanced'));
      md.set({ html: true });                    // required by mermaid
      md.use(require('markdown-it-plantuml'));   // required by PalmUML
      md.use(require('markdown-it-katex'));      // required by Math
    },
  },
  plugins: [
    ['@snowdog/vuepress-plugin-pdf-export', {
      puppeteerLaunchOptions: {
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      },
    }],
  ],
};
