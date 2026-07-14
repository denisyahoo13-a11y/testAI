import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// Build a single self-contained index.html (no server needed — open by double-click)
// Usage: npx vite build --config vite.singlefile.config.js
export default defineConfig({
  plugins: [react(), viteSingleFile()],
  base: './',
  build: {
    outDir: 'standalone',
    assetsInlineLimit: 100000000,
    cssCodeSplit: false,
  },
})
