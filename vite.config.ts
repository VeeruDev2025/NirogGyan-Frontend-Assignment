import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/NirogGyan-Frontend-Assignment/', // 👈 Add this line for GitHub Pages
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
