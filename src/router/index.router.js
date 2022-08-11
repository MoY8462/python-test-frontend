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

function existToken() {
    return localStorage.token;
}


router.beforeEach((to, from, next) => {
    if (to.path === '/' && !existToken()) {
        next('/login')
    }
    else if (to.path === '/login' && existToken()) {
        next('/')
    }
    else if(to.path === '/register' && existToken()){
        next('/')
    }
    else {
        next()
    }

  });

export default router
