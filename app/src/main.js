// 程序的入口

import Vue from 'vue'
// 导入vuex
import Vuex from 'vuex'
// 导入status(管理全局应用模块状态)
import status from './store/modules/status.js'
// 导入demo模块
import demo from './store/modules/demo.js'

import VueRouter from 'vue-router'

import routes from './routes'
import App from './App'

// 告诉vue要使用router
Vue.use(VueRouter)
Vue.use(Vuex)

// env里去获取当前的环境是否需要开启严格模式
// 在发布环境开启严格模式会造成性能上不必要的损失
const debug = process.env.NODE_ENV !== 'production'

// 实例化router对象
const router = new VueRouter({
  mode: 'hash', // 设置路由模式 可选值: "hash" | "history" | "abstract"，默认"hash"
  linkActiveClass: 'u-link--Active', // 这是链接激活时的class
  routes // 挂载路由集合
})

// 默认导出vuex模块
export default new Vuex.Store({
  // 导入模块
  modules: {
    status,
    demo
  },
  // 是否开启严格模式
  strict: debug
})

new Vue({
  // el: '#app',
  // template: '<App/>',
  // components: { App }
  router,
  render: h => h(App)
}).$mount('#app')
