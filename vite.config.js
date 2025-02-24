import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Talspo',
        short_name: 'Talspo',
        description: 'Talspo Job Portal Website',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        scope: '/',
        lang: 'en',
        icons: [
          {
            src: '/assets/images/logo-icon.png',
            sizes: '145x145',
            type: 'image/png',
          },
        ],
        screenshots: [
          {
            src: '/assets/images/screenshot1.png', 
            sizes: '1440x2151',
            type: 'image/png',
            form_factor: 'wide',
          },
          {
            src: '/assets/images/screenshot2.png', 
            sizes: '1440x4306',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, 
      },
    }),
  ],
});
