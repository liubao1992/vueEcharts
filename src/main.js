import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' //引入状态管理 store
import axios from 'axios'
import VueAxios from 'vue-axios'
import elementUI from 'element-ui'
import echarts from 'echarts'
import {chartResize} from './assets/js/chartResize'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/style.css'
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.use(elementUI)
Vue.use(VueAxios, axios)
//在原型链中注册，调整窗口自动调节图表大小，然后在需要的页面调用：this.$chartResize()
Vue.prototype.$chartResize = chartResize

new Vue({
  router,
  store,//注册store(这可以把 store 的实例注入所有的子组件)
  render: h => h(App),
}).$mount('#app')
