import './assets/main.css'

import { createApp } from 'vue'

import App from '@/App.vue'
import router from '@/router'
import { I18nPlugin } from '@/plugins'

const app = createApp(App)

app.use(router)
app.use(I18nPlugin)

app.mount('#app')
