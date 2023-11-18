import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';

// Utilities
import { fileURLToPath, URL } from 'node:url';


export default defineConfig({
  plugins: [
    laravel({
      input: 'resources/js/app.ts',
      refresh: true,
    }),
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false,
        },
      },
    }),
    AutoImport({
      imports: [
        'vue',
      ]
    }),
    Components({
      dirs: ['resources/js/Components'],
    })
  ],

  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('/resources/js', import.meta.url))
    },
    extensions: [
      '.js',
      '.json',
      '.mjs',
      '.ts',
      '.vue',
    ],
  },
});
