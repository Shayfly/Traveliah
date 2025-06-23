import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Traveliah/', // חובה לשים את שם הריפו כאן
  plugins: [react()],
})
