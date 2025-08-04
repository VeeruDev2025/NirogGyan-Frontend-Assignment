import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // 👈 Always use root for local development
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
