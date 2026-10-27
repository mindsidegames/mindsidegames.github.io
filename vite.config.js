import { defineConfig } from 'vite'
import mkcert from "vite-plugin-mkcert"
import svg from "vite-plugin-svgo"

//import basicSsl from '@vitejs/plugin-basic-ssl'

export default defineConfig({
  server: {
    https: true,
  },
  plugins: [
    mkcert(),
    svg({
      plugins: ['prefixIds']
    })
  ],
  base: "/",
  build: {
    minify: true,
    assetsInlineLimit: 512
  }
})
