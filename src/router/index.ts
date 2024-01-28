import { createRouter, createWebHistory } from 'vue-router'

import { registerMiddlewares, layoutMiddleware, titleMiddleware } from '@/middleware'
import { I18nPlugin } from '@/plugins'
import Layout from '@/layouts'

declare module 'vue-router' {
    interface RouteMeta {
        title?: string
        layout: Layout
    }
}

const { t } = I18nPlugin.global

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_API_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/HomeView.vue'),
            meta: { title: t('app.home.title'), layout: Layout.Empty }
        },
        {
            path: '/session/:id',
            name: 'session',
            component: () => import('@/views/SessionView.vue'),
            meta: { title: t('app.session.title'), layout: Layout.Empty }
        },
        {
            path: '/session/:id/quiz/:id',
            name: 'quiz',
            component: () => import('@/views/QuizView.vue'),
            meta: { title: t('app.quiz.title'), layout: Layout.Empty }
        }
    ]
})

registerMiddlewares(router, [layoutMiddleware, titleMiddleware])

export default router
