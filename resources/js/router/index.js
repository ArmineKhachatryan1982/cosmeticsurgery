import { createRouter, createWebHistory } from  "vue-router";
import AdminLayout from '../components/AdminLayout.vue'
import HomeIndex from '../views/home/Index.vue'
import notFound from '../components/notFound.vue'

const homeRoutes = [
    {
        path: '/home',
        name: 'home.index',
        component: HomeIndex
    }

]
const notFoundRoutes = [
    {
        path:'/:any(.*)*',
        name:'notfound',
        component: notFound
    }
]

const routes = [
    {
        path: '/',
        componenet: AdminLayout,
        children: [
            ...homeRoutes,
            ...notFoundRoutes,
        ]
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
