import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Fichier vite.config.js
export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1'
  }
})
