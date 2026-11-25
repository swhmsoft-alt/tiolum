import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://titaniumcncmachining.com',
  output: 'static',
  trailingSlash: 'always',
  // 旧六族 URL → 新五族 URL。Astro 静态输出生成 meta refresh 跳转页作为兜底；
  // 真正的 301 由 public/_redirects 交给 Cloudflare Workers Static Assets 发出。
  redirects: {
    '/parts/titanium-flanges/': '/parts/flanges-plates-interfaces/',
    '/parts/titanium-brackets/': '/parts/mounting-structural-components/',
    '/parts/titanium-housings/': '/parts/blocks-housings-manifolds/',
    '/parts/titanium-shafts-bushings/': '/parts/custom-mechanical-components/',
    '/parts/titanium-replacement-parts/': '/parts/custom-mechanical-components/',
    '/parts/titanium-oem-components/': '/parts/custom-mechanical-components/',
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});