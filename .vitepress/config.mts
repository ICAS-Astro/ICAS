import { defineConfig } from 'vitepress'

import { extendConfig } from "@voidzero-dev/vitepress-theme/config";

let conf = {
  srcDir: "src",

  title: "ICAS - documents",
  description: "Corpus de documents dédié à l'étude du projet ICAS dans le cadre de l'EIP d'Epitech",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
}

export default extendConfig(
  defineConfig(conf)
)
