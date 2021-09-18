import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/login' //@相当于src
import Home from '@/views/home/home'
import Layout from '@/views/layout/layout'
import Article from '@/views/article/article'
import User from '@/views/user/user'
import Comment from '@/views/comment/comment'
import Setting from '@/views/setting/setting'


const routes = [{
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/',
        name: 'Layout',
        component: Layout,
        children: [{
                //默认子路由可以不写name，只可以设置一个默认子路由
                path: '/',
                //name: 'home',
                component: Home
            },
            {
                path: '/article',
                name: 'article',
                component: Article
            },
            {
                path: '/user',
                name: 'user',
                component: User
            },
            {
                path: '/setting',
                name: 'setting',
                component: Setting
            },
            {
                path: '/comment',
                name: 'comment',
                component: Comment
            },
        ]

    },

]
const router = createRouter({
        history: createWebHistory(process.env.BASE_URL),
        routes: routes
    })
    // router.beforeEach((to, from, next) => {
    //     // const user = Json.parse(window.localStorage.getItem('user'))
    //     //校验登录状态
    //     // if (to.path !== '/login') {
    //     //     if(user){
    //     //         next()
    //     //     }else{
    //     //         next('/login')
    //     //     }
    //     //     //没有登录，跳转登录
    //     //     next('/login')
    //     // } else {
    //     //     // 登录页面，正常允许登录
    //     //     next()
    //     // }
    // })

export default router