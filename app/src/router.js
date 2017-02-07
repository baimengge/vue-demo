// 路由的输出口

import router from './router'

// 实例化router对象
const router = new VueRouter({
  mode: 'hash', // 设置路由模式 可选值: "hash" | "history" | "abstract"，默认"hash"
  linkActiveClass: 'u-link--Active', // 这是链接激活时的class
  routes // 挂载路由集合
})

export default router