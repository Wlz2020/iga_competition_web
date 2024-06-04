import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
<<<<<<< HEAD
  base: process.env.NODE_ENV === 'production' ? '/my_vite_vue3/' : '/'
=======
  // eslint-disable-next-line no-undef
  base: process.env.NODE_ENV === 'production' ? '/iga_competition_web/' : '/'
>>>>>>> 96a2ceb2ed505da10efeaa2202d6562c809bf9db
})
