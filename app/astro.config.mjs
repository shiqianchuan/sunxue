// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // 主域名：用于 canonical 与 OG 绝对地址，四个域名共用一套代码
  site: 'https://sunwukong.health',
  vite: {
    plugins: [tailwindcss()],
  },
});
