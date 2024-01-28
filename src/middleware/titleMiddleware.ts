import type { RouteLocationNormalized } from 'vue-router'
import { I18nPlugin } from '@/plugins'

const { t } = I18nPlugin.global

const layoutMiddleware = async (route: RouteLocationNormalized) => {
    const title = route.meta.title

    if (title) {
        document.title = title.toString() + ' - ' + t('app.name')
    }
}

export default layoutMiddleware
