import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
        '@': resolve(__dirname, './src'),
        '@assets': resolve(__dirname, './src/assets'),
        '@containerComponents': resolve(
          __dirname,
          './src/components/form/'
        ),
        '@layouts': resolve(__dirname, './src/layouts'),
        '@router': resolve(__dirname, './src/router'),
        '@theme': resolve(__dirname, './src/theme'),
        '@views': resolve(__dirname, './src/views'),
    },
},
})
