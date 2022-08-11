import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
        '@': resolve(__dirname, './src'),
        '@assets': resolve(__dirname, './src/assets'),
        '@config': resolve(__dirname, './src/config'),
        '@components': resolve(__dirname,'./src/components/'),
        '@containerComponents': resolve(
          __dirname,
          './src/components/form/'
        ),
        '@layouts': resolve(__dirname, './src/layouts'),
        '@middlewares': resolve(__dirname, './src/middlewares'),
        '@router': resolve(__dirname, './src/router'),
        '@server': resolve(__dirname, './src/server'),
        '@services': resolve(__dirname, './src/services'),
        '@utils': resolve(__dirname, './src/utils'),
        '@theme': resolve(__dirname, './src/theme'),
        '@views': resolve(__dirname, './src/views'),
    },
},
})
