import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages'da bu ikki qiymatni .github/workflows/deploy.yml o'zi beradi.
// Lokal ishlaganda ikkalasi ham bo'sh: sayt "/" da ochiladi, sitemap va
// canonical havolalar chiqmaydi.
const siteUrl = process.env.SITE_URL || undefined;
const basePath = process.env.BASE_PATH || undefined;

export default defineConfig({
  site: siteUrl,
  base: basePath,
  integrations: siteUrl ? [sitemap()] : [],
  devToolbar: { enabled: false },
  i18n: {
    locales: ['uz', 'ru'],
    defaultLocale: 'uz',
  },
});
