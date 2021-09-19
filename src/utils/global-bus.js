//全局通信组件，让任何组件之间实现通信
import { vue } from 'vue'
export default new vue()


//假设a组件要给b组件发送数据

//b注册通信的事件
// import globalBus from "@/utils/global-bus"
// globalBus.$on('foo',(data) => {
//     //处理函数
// })

//a发布通信事件
// import globalBus from '@/utils/global-bus'
// globalBus.$emit('bar',123456)
//通信两端使用的事件名必须一致，否则是无效的
//反之，b要给a发送数据，就是a注册，b发布