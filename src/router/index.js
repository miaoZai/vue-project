import VueRouter from 'vue-router'
import Vue from 'vue'

// const Home = () => import("../components/Home");
// const HomeNews = () => import("../components/HomeNews");
// const HomeMessage = () => import("../components/HomeMessage");
// const About = () => import("../components/About");
// const User = () => import("../components/User");
// const Profile = () => import("../components/Profile");
const Home = () => import('views/home/Home.vue')
const Profile = () => import('views/profile/Profile.vue')
const Category = () => import('views/category/Category.vue')
const Cart = () => import('views/cart/Cart.vue')

// 安装插件
Vue.use(VueRouter)
//创建VueRouter对象
const routes = [
  // 重定向路由
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
]
const router = new VueRouter({
  // 将默认的hash模式改为history模式
  routes,
  mode: 'history'
})
export default router
