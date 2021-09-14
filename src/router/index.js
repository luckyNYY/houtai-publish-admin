import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/login' //@相当于src
import Home from '@/views/home/home'
import Layout from '@/views/layout/layout'
const routes = [{
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/',
        name: '/layout',
        component: Layout,
        children: [{
            //默认子路由可以不写name，只可以设置一个默认子路由
            path: '',
            name: 'home',
            component: Home
        }]

    },

]
const router = createRouter({
        history: createWebHistory(process.env.BASE_URL),
        routes: routes
    })
    // router.beforeEach((to,from,next) => {
    //     const user = Json.parse(window.localStorage.getItem('user'))
    //     //校验登录状态
    //     if(to.path !== '/login') {
    //        if(user){ 
    //            next()
    //        }else {
    //         next('/login')
    //        }
    //     }else {
    //         next()
    //     }
    // })

export default router