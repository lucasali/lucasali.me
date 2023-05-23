import { URL, fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Markdown from 'vite-plugin-vue-markdown'
import Icons from 'unplugin-icons/vite'
import SVG from 'vite-svg-loader'

// @ts-expect-error missing types
import TOC from 'markdown-it-table-of-contents'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  optimizeDeps: {
    include: ['vue', 'vue-router', '@vueuse/core'],
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
      reactivityTransform: true,
    }),
    Pages({
      extensions: ['vue', 'md'],
    }),
    Markdown({
      markdownItSetup(MarkdownIt) {
        MarkdownIt.use(TOC, {
          includeLevel: [1, 2, 3],
        })
      },
    }),
    Icons({}),
    SVG({
      svgo: false,
      defaultImport: 'url',
    }),
  ],
})
