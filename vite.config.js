import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // Use this if assets are not loading correctly
  build: {
    outDir: 'dist', // Ensure the output directory is correct
  },
})
