import { createRouter, createWebHashHistory } from 'vue-router'
import NotFound from '../views/NotFound.vue'

const routes = [{
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ( /* webpackChunkName: "Login" */ '@/modules/auth/views/Login.vue')
    },
    {
        path: '/home',
        name: 'ChatHome',
        component: () =>
            import ( /* webpackChunkName: "ChatHome" */ '@/modules/chat/views/ChatHome.vue')
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/404'
    },
    {
        path: '/404',
        name: 'NotFound',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router