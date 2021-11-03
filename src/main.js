import { createApp } from 'vue'
import App from './App'
//引入router
import router from './router'
//引入elementui-plus组件库
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'


//加载全局样式less
import './styles/index.less'

const app = createApp(App)
app.use(ElementPlus, { locale: zhCn })
app.use(router)
app.mount('#app')