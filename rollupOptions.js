import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['src/assets/Profile-pic.png'],
    },
  },
  resolve: {
    alias: {
      '@': '/src', 
    },
  },
});