import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Dwanda-s-portfolio-2.0/',
  server: {
    open: true
  }
})
