// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import yaml from '@rollup/plugin-yaml';

export default defineConfig({
  site: 'https://jiajun-jiao.github.io',
  integrations: [sitemap()],
  vite: {
    plugins: [yaml()],
  },
  // Old Jekyll-era URLs → new anchors, so links shared before the rebuild keep working.
  redirects: {
    '/cv': '/#experience',
    '/resume': '/#experience',
    '/about': '/',
    '/publications': '/#publications',
    '/talks': '/#talks',
    '/teaching': '/#talks',
    '/talks/2024-talk-1': '/#talks',
    '/publication/2023-08-21-paper-title-number-1': '/#publications',
    '/publication/2024-02-08-paper-title-number-2': '/#publications',
    '/publication/2025-10-27-paper-title-number-3': '/#publications',
  },
});
