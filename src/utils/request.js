// 基于axios封装的请求模块
//创建一个axios实例，通过这个实例去发送请求
import axios from 'axios'
const request = axios.create({
        baseURL: '' //请求的基础路径
    })
    //请求拦截器
instance.interceptors.request.use(
        config => {
            const token = localStorage.getItem('token')
            if (token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
                config.headers.authorization = token //请求头加上token
            }
            return config
        },
        err => {
            return Promise.reject(err)
        })
    //响应拦截器
    // http response 拦截器
instance.interceptors.response.use(
        response => {
            //拦截响应，做统一处理 
            if (response.data.code) {
                switch (response.data.code) {
                    case 1002:
                        store.state.isLogin = false
                        router.replace({
                            path: 'login',
                            query: {
                                redirect: router.currentRoute.fullPath
                            }
                        })
                }
            }
            return response
        },
        //接口错误状态处理，也就是说无响应时的处理
        error => {
            return Promise.reject(error.response.status) // 返回接口返回的错误信息
        })
    //导出
export default request
//使用方法
//import request from 'request.js'
// request.xxx
// request({
//     method:,
//     url:
// })