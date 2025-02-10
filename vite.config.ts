import {defineConfig} from 'vite'
import type { UserConfig } from 'vite'
export default defineConfig({
    resolve: {
      alias: {
        '@': './src'
      }
    },
    build: {
      target: 'esnext',
      minify: true,
      
      rollupOptions: {
        input: ['index.html'],
      },
      outDir: 'dist',
    },
    esbuild: {
      drop: ['console', 'debugger'],
      target: 'ESNext',
    }
}) satisfies UserConfig;