import { createRouter, createWebHistory } from 'vue-router'

import home from '../views/Home.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: home
        },
        {
            path: '/about',
            component: () => import('../views/About.vue')
        }
    ]
})

export default router
