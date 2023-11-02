import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import vercel from '@astrojs/vercel/static';
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
  experimental: {
    devOverlay: true
  },
  site: "https://example.com",
  integrations: [
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: { theme: 'github-dark-dimmed' },
      gfm: true,
    }),
    sitemap({
      i18n: {
        defaultLocale: 'uk',
        locales: {
          uk: 'uk-UA',
          en: 'en-US', 
          ru: 'ru-UA',
        },
      },
    }),
    react(),
    astroI18next(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  adapter: vercel({
    analytics: true,
  }),
});
