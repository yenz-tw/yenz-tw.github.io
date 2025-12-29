import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://yenz.tw',
  output: 'static',
  vite: {
    build: {
      cssMinify: true,
    }
  }
});
