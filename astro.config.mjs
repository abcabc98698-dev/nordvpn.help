import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { fileURLToPath } from "url";
import path from "path";
import fs from "node:fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const siteUrl = import.meta.env.PUBLIC_SITE_URL || 'https://nordvpn.help';

function sitemapXmlAlias() {
  return {
    name: 'sitemap-xml-alias',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const sitemapIndexPath = fileURLToPath(new URL('sitemap-index.xml', dir));
        const sitemapXmlPath = fileURLToPath(new URL('sitemap.xml', dir));
        if (fs.existsSync(sitemapIndexPath)) {
          fs.copyFileSync(sitemapIndexPath, sitemapXmlPath);
        }
      }
    }
  };
}

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  base: '/',
  envPrefix: 'PUBLIC_',
  redirects: {
    '/tutorial': '/blog',
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    }
  },

  server: {
    port: 5200,
  },

  integrations: [
    mdx(),
    sitemap({
      filter: (page) =>
        !page.includes('/signin') &&
        !page.includes('/signup') &&
        !page.includes('/elements') &&
        !page.includes('/tutorial') &&
        !page.includes('/blog/page/1'),
      serialize(item) {
        item.lastmod = new Date();
        if (item.url === `${siteUrl}/`) {
          item.changefreq = 'daily';
          item.priority = 1.0;
        } else if (item.url.includes('/pricing')) {
          item.changefreq = 'weekly';
          item.priority = 0.9;
        } else if (item.url.includes('/blog/')) {
          item.changefreq = 'weekly';
          item.priority = 0.8;
        } else if (item.url.includes('/features') || item.url.includes('/status')) {
          item.changefreq = 'weekly';
          item.priority = 0.8;
        } else {
          item.changefreq = 'monthly';
          item.priority = 0.6;
        }
        return item;
      }
    }),
    sitemapXmlAlias(),
  ],
});
