import { defineConfig } from 'vitepress'

import { extendConfig } from "@voidzero-dev/vitepress-theme/config";

let conf = {
  srcDir: "src",

  title: "ICAS - documents",
  description: "Corpus de documents dédié à l'étude du projet ICAS dans le cadre de l'EIP d'Epitech",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
    ],

    sidebar: [
      {
        text: 'Documents',
        items: [
          { text: 'Intuition', link: '/intuition' },
          { text: 'Personas', link: '/personas' },
          { text: 'User stories', link: '/user-stories' },
          { text: 'Backlog', link: '/backlog' },
          { text: 'État de l\'Art', link: '/state-of-the-art' },
          { text: 'Coût & Échelle', link: '/cost-and-sizing' },
          { text: 'Impacts, Risques & Mitigation', link: '/impacts-risks-and-mitigation' },
          { text: 'Analyze SWOT', link: '/swot' },
          { text: 'Impact Environemental', link: '/environmental-impact' },
          { text: 'Déployement & Résilience', link: '/deployment-resilience' },
          { text: 'Risques de sécurité', link: '/security-risks' },
          { text: 'Accessibilité', link: '/accessibility' },
          { text: 'RGPD', link: '/rgpd' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/icas-astro/icas-documents' }
    ]
  }
}

export default extendConfig(
  defineConfig(conf)
)
