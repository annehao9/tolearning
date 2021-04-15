import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Field from '../testing/Field.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Navbar from '../testing/Navbar.vue'
import Tabbar from '../testing/Tabbar.vue'
import Cart from '../testing/Cart.vue'
import Swipe from '../components/Swipe.vue'
import Articleone from '../components/Articleone.vue'
import My from '../testing/My.vue'
import Me from '../views/Me.vue'
import Article from '../views/Article.vue'
import Infinite from '../components/Infinite.vue'


Vue.use(VueRouter)
// 封装路由对象
const routes = [
  {
    path: '/article',
    name: 'Article',
    component: Article
  },
  {
    path: '/infinite',
    name: 'Infinite',
    component: Infinite
  },
  {
    path: '/articleone',
    name: 'Articleone',
    component: Articleone
  },
  {
    path: '/swipe',
    name: 'Swipe',
    component: Swipe
  },
  {
    path: '/me',
    name: 'Me',
    component: Me
  },
  {
    path: '/my',
    name: 'My',
    component: My
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/tabbar',
    name: 'Tabbar',
    component: Tabbar
  },
  {
    path: '/navbar',
    name: 'Navbar',
    component: Navbar
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/field',
    name: 'Field',
    component: Field
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
