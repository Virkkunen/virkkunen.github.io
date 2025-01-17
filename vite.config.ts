import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // VitePWA({ registerType: 'autoUpdate' })
  ],
  base: '/',
  build: {
    manifest: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        sourcemapExcludeSources: true,
      },
    },
  },
})
