import { createRouter, createWebHistory } from 'vue-router'

import { registerMiddlewares, layoutMiddleware, titleMiddleware } from '@/middleware'
import Layout from '@/layouts'

declare module 'vue-router' {
    interface RouteMeta {
        title?: string
        layout: Layout
    }
}

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/HomeView.vue'),
            meta: { title: 'Home', layout: Layout.Empty }
        },
        {
            path: '/test',
            name: 'test',
            component: () => import('@/views/TestView.vue'),
            meta: { title: 'Test', layout: Layout.Empty }
        }
    ]
})

registerMiddlewares(router, [layoutMiddleware, titleMiddleware])

export default router
