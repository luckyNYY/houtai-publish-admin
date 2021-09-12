// 基于axios封装的请求模块
//创建一个axios实例，通过这个实例去发送请求
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
const request = axios.create({
        baseURL: 'http://ttapi.research.itcast.cn' //请求的基础路径
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