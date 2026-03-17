import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  site: 'https://meu-site.vercel.app',
  integrations: [tailwind({ applyBaseStyles: false })],
});
