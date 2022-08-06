import { createApp } from 'vue'
import './main.css'
import router from '@router/index.router'
import App from '@layouts/default.vue'

createApp(App)
    .use(router)
    .mount('#app')
