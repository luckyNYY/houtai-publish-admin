import { createApp } from 'vue'
import App from './App.vue'
//引入router
import router from './router'
//引入elementui-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//引用less
import './styles/index.less'

const app = createApp(App)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.use(router)
app.mount('#app')