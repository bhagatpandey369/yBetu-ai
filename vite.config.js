import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Relative base so the same build works at ybetu.com/ and at
// bhagatpandey369.github.io/yBetu-ai/.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
