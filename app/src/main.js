// 程序的入口

import Vue from 'vue'
import VueRouter from 'vue-router'
// import router from './router'
// import routes from './routes'
import App from './App'
// 导入模板
import Article from './components/Article.vue'
import Home from './components/home.vue'

// 告诉vue要使用router
Vue.use(VueRouter)

// 实例化router对象
const router = new VueRouter({
  mode: 'hash', // 设置路由模式 可选值: "hash" | "history" | "abstract"，默认"hash"
  linkActiveClass: 'u-link--Active', // 这是链接激活时的class
  routes // 挂载路由集合
})

// 编写路由集合
const routes = [
  {
    name: 'home', // 路由名(选填)
    path: '/', // 根路由
    component: Home // 模板
  },
  {
    name: 'Article',
    path: '/Article',
    component: Article
  }
]

// 导出router对象
export default router

new Vue({
  // el: '#app',
  // template: '<App/>',
  // components: { App }
  router,
  render: h => h(App)
}).$mount('#app')
