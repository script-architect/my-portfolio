
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Enforcing configuration to integrate React and tailwind CSS v4 pipeline smoothly

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})

// E