import { VoidZeroTheme, themeContextKey } from "@voidzero-dev/vitepress-theme/src";
import type { Theme } from "vitepress";

import logoDark from "../../assets/icas-dark.svg";
import logoLight from "../../assets/icas-light.svg";

import footerBg from "../../assets/footer-background.png";
import monoIcon from "../../assets/icas-comet-mono.svg";

import "@voidzero-dev/vitepress-theme/src/styles/index.css";

export default {
  ...VoidZeroTheme,
  enhanceApp(ctx) {
    ctx.app.provide(themeContextKey, {
      logoDark,
      logoLight,
      logoAlt: "Vite",
      footerBg,
      monoIcon,
    });
    VoidZeroTheme.enhanceApp(ctx)
  },
} satisfies Theme;
