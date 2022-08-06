import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: () => import('@views/Login.vue'),
        },
        {
            path: '/register',
            name: 'Register',
            component: () => import('@views/Register.vue'),
        },
        {
            path: '/',
            name: 'Home',
            component: () => import('@views/Dashboard.vue'),
            
        },
    ],
})

/**
 * @function
 * @description On error in router, log error with custom logger.
 * @param error Error message. */


export default router
