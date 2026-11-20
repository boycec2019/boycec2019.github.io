import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  devToolbar: { enabled: false },
  vite: { plugins: [tailwindcss()] },
  site: 'https://boycec2019.github.io',
});
