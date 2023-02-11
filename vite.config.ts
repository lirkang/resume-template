import vue from '@vitejs/plugin-vue';
import VueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';
import ElementPlus from 'unplugin-element-plus/dist/vite';
import { defineConfig } from 'vite';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({ reactivityTransform: true }), VueSetupExtend(), VueJsx(), ElementPlus({})],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src'),
      },
    ],
  },
  server: { hmr: true },
  base: '/resume-template',
});
