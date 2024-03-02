import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/inicio',
        component: () => import('@/pages/')
    },
    {
        path: '/'
    },
    
]