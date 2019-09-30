module.exports = {
  base: '/blog/',
  title: "simple blog",
  description: "simple blog",
  ga: "UA-121061441-1",
  markdown: {
    lineNumbers: true
  },
  head: [
    ['link', { rel: 'icon', href: '/hero.jpeg' }]
  ],
  themeConfig: {
    repo: "24code/blog",
    nav: [
      {
        text: "博客",
        link: "/blog/"
      }
    ],
    lastUpdated: "更新时间",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "本文源码地址"
  },
  plugins: {
    '@vuepress/medium-zoom': {
      selector: 'img',
      options: {
        margin: 16
      }
    },
    '@vuepress/back-to-top': true
  }
}
