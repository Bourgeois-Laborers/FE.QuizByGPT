import { createI18n } from 'vue-i18n'

import enUs from '@/locales/en-US.json'

type MessageSchema = typeof enUs

const i18n = createI18n<[MessageSchema], 'en-US'>({
    legacy: false,
    locale: 'en-US',
    fallbackLocale: 'en-US',
    messages: { 'en-US': enUs }
})

export default i18n
