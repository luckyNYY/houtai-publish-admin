import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/login.vue' //@相当于src

const routes = [{
    path: '/login',
    name: 'Login',
    component: Login
}]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: routes
})

export default router