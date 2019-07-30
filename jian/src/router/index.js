import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/home/home'
// import Product from '@/components/product/product'
// import User from '@/components/user/user'
// import Shopcart from '@/components/shopcart/shopcart'
// import Category from '@/components/category/category'
// import Login from '@/components/login/login'
// import Reg from '@/components/reg/reg'
// import Detail from '@/components/detail/detail'
// 路由懒加载
//当打包构建应用的时候，js包会变大，影响加载。如果把不同路由对应的组件分割成不同的代码，当路由被访问的时候才加载对应的组件，
//这样就会更高效
const Home = () => import('../components/home/home')
const Product = () => import('../components/product/product.vue')
const User = () => import('../components/user/user.vue')
const Shopcart = () => import('../components/shopcart/shopcart.vue')
const Category = () => import('../components/category/category.vue')
const Login = () => import('../components/login/login.vue')
const Reg = () => import('../components/reg/reg.vue')
const Detail = () => import('../components/detail/detail.vue')
const Fenlei = () => import('../components/product/fenlei.vue')
const Search = () => import('../components/search/search.vue')
const Love = () => import('../components/love/love.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta:{isLogin:false}
    },
    {
      path: '/product',
      name: 'product',
      component: Product
    },
    {
      path: '/shopcart',
      name: 'shopcart',
      meta:{isLogin:true},
      component: Shopcart
    },
    {
      path: '/user',
      name: 'user',
      meta:{isLogin:true},
      component: User
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/reg',
      name: 'reg',
      component: Reg
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/fenlei',
      name: 'fenlei',
      component: Fenlei
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/love',
      name: 'love',
      component: Love
    }
  ]
})
