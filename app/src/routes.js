// 导入模板
import Article from './components/Article.vue'
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
    component: Article
  }
]

// 导出routes对象
export default routes
