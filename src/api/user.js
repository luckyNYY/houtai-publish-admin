import request from '@/utils/request'
// 用户请求模块
export const login = data => {
        return request({
            methods: 'POST',
            url: '',
            //data用来设置请求体
            data
        })
    }
    //用户个人资料
export const getUserProflie = data => {
    const user = Json.parse(window.localStorage.getItem('user'))
    return request({
        methods: 'GET',
        url: '',
        //接口要求+token
        header: {
            xxx: `xxx ${ user.token }`
        }
    })
}