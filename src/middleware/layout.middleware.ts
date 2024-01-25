import type { RouteLocationNormalized } from 'vue-router'
import Layout from '@/layouts'

const layoutMiddleware = async (route: RouteLocationNormalized) => {
    try {
        const layout = route.meta.layout
        const layoutComponent = await import(`@/layouts/${layout}.vue`)
        route.meta.layoutComponent = layoutComponent.default
    } catch (e) {
        console.error('Error occurred in processing of layouts: ', e)
        console.log(`Mounted default layout - ${Layout.Empty}`)

        const layoutComponent = await import(`@/layouts/${Layout.Empty}.vue`)
        route.meta.layoutComponent = layoutComponent.default
    }
}

export default layoutMiddleware
