import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({ 
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        "theme_color": "#f69435",
        "background_color": "#f69435",
        "display": "standalone",
        "scope": "/",
        "start_url": "/",
        "name": "Omar Abdelatif",
        "short_name": "Portfolio",
        "description": "Portfolio With Vite",
        "icons": [
          {
            "src": "/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "any maskable"
          },
          {
            "src": "/icon-256x256.png",
            "sizes": "256x256",
            "type": "image/png",
            "purpose": "any maskable"
          },
          {
            "src": "/icon-384x384.png",
            "sizes": "384x384",
            "type": "image/png",
            "purpose": "any maskable"
          },
          {
            "src": "/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "any maskable"
          }
        ]
      }
    })
  ],
})
