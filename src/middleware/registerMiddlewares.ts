import type { Router, RouteLocationNormalized } from 'vue-router'

const register = (router: Router, middleware: ((route: RouteLocationNormalized) => void)[]) => {
    router.beforeEach((to, from, next) => {
        middleware.forEach((fn) => fn(to))
        next()
    })
}

export default register
