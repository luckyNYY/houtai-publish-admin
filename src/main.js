import { createApp } from 'vue'
import App from './App.vue'
//引入router
import router from './router'
//引入elementui-plus组件库
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//加载全局样式less
import './styles/index.less'

const app = createApp(App)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.use(router)
app.mount('#app')