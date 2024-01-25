import type { RouteLocationNormalized } from 'vue-router'

const layoutMiddleware = async (route: RouteLocationNormalized) => {
    const title = route.meta.title

    if (title) {
        document.title = title.toString() + ' - Quiz by GPT'
    }
}

export default layoutMiddleware
