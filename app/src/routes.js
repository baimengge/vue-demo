// 导入模板
// import Article from './components/Article.vue'
import Home from './components/home.vue'

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
    component: require('./components/Article.vue'),
    children: [
      {
        name: 'vue2_1',
        path: 'vue2_1',
        component: require('./md/articles/vue2-1.vue')
      },
      {
        name: 'vue2_2',
        path: '/article/vue2_2',
        component: require('./md/articles/vue2-2.vue')
      }
    ]
  }
]

// 导出routes对象
export default routes
