import { createRouter, createWebHistory } from  "vue-router";
import AdminLayout from '../components/AdminLayout.vue'

const homeRoutes = [
    {
        path: '/home',
        name: 'home.index',
        component: faqCategoriesIndex
    }

]
const router = createRouter({
    history: createWebHistory(),
    routes
})

    export default router
