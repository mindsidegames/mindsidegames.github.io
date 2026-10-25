import { defineConfig } from 'vite'
import mkcert from "vite-plugin-mkcert"

//import basicSsl from '@vitejs/plugin-basic-ssl'

export default defineConfig({
  server: {
    https: true,
  },
  plugins: [
    mkcert()
  ],
  base: "/",
  build: {
    minify: true,
    assetsInlineLimit: 512
  }
})
