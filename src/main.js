import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' 
import {Button} from "ant-design-vue"
import "../node_modules/ant-design-vue/dist/antd.css"
import echarts from "echarts"
// import "../node_modules/echarts/dist/"

Vue.config.productionTip = false
Vue.prototype.$echarts=echarts
Vue.component('Button',Button)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
