import { defineConfig, UserConfig } from 'vitepress'

import { extendConfig } from "@voidzero-dev/vitepress-theme/config";
import { DefaultTheme } from 'vitepress/theme';

let conf: UserConfig<NoInfer<DefaultTheme.Config>>  = {
  srcDir: "src",

  title: "ICAS - documents",
  description: "Corpus de documents dédié à l'étude du projet ICAS dans le cadre de l'EIP d'Epitech",

  vite: {
    publicDir: '../assets'
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local"
    },
    sidebar: [
      {
        text: 'Documents',
        items: [
          { text: '👁️‍🗨️ Intuition', link: '/intuition' },
          { text: '🧑‍🏫 Personas', link: '/personas' },
          { text: '📖 Histoire utilisateurs', link: '/user-stories' },
          { text: '📚 Backlog', link: '/backlog' },
          { text: '⚛️ État de l\'Art', link: '/state-of-the-art' },
          { text: '💵 Coût & Échelle', link: '/cost-and-sizing' },
          { text: '📊 Gestion des risques', link: '/impacts-risks-and-mitigation' },
          { text: '🧩 Analyze SWOT', link: '/swot' },
          { text: '🛰️ Déployement & Résilience', link: '/deployment-resilience' },
          { text: '🍃 Impact Environemental', link: '/environmental-impact' },
          { text: '🔐 Risques de sécurité', link: '/security-risks' },
          { text: '♿ Accessibilité', link: '/accessibility' },
          { text: '🧑‍⚖️ RGPD', link: '/rgpd' },
          { text: '🔭 Comparatif', link: '/feature-comparison' },
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
