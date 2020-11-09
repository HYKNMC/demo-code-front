import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';

Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$axios = axios
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.get['Content-Type'] = 'application/json'

/* 数据库后台以秒进行记录时间 */
Vue.filter('dateFormat', (originalVal) => {
    const date = new Date(originalVal)
    const year = date.getFullYear()
        /* 月、天从零开始，需要加一称为常识中的时间，添加''使其成为字符串，padStart()第一个参数表示总长度，第二个子参数表示长度不足时使用的填充 */
    const month = (date.getMonth() + 1 + '').padStart(2, '0')
    const day = (date.getDate() + 1 + '').padStart(2, '0')
    const hour = (date.getHours() + '').padStart(2, '0')
    const min = (date.getMinutes() + '').padStart(2, '0')
    const sec = (date.getSeconds() + '').padStart(2, '0')

    return `${year}-${month}-${day} ${hour}:${min}:${sec}`
})

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})