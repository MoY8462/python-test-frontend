import { createApp } from 'vue'
import { plugin, defaultConfig } from '@formkit/vue'
import { generateClasses } from '@formkit/themes'
import './main.css'
import router from '@router/index.router'
import server from '@server/index.server'
import App from '@layouts/default.vue'
import formkitTheme from '@theme/libs/formkit.lib'

//server({ environment: process.env.NODE_ENV })

createApp(App)
    .use(router)
    .use(plugin, 
        defaultConfig({
            config: {
                classes: generateClasses(formkitTheme),
            },
        }))
    .mount('#app')
