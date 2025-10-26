import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/** @type {import('tailwindcss').Config} */
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open:true,
    proxy: {      '/api': {
        target: 'https://api.lushhotelcloud.com',
        changeOrigin: true,
      },
    },
  },
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
});
