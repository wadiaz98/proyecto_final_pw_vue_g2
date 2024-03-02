import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/inicio',
        component: () => import('@/pages/PaginaInicio.vue')
    },
    {
        path: '/registrarse',
        component: () => import ('@/pages/ClienteRegistrar.vue')
    },
    {
        path: '/loggin',
        component:() => import ('@/pages/InicioSesion.vue')
    }
    ,
    {
        path: '/:pathMatch(.*)*',
        component: () => import('../pages/NotFoundPage.vue')
    }
]

const router = createRouter({history: createWebHashHistory(), routes})

export default router;
