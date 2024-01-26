import './assets/main.css'

import { createApp } from 'vue'

import App from '@/App.vue'
import router from '@/router'
import { localizationPlugin } from '@/plugins'

const app = createApp(App)

app.use(router)
app.use(localizationPlugin)

app.mount('#app')
