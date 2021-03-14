import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login/Login'
import Home from '@/pages/Home/Home'
import Swiper from '@/pages/Home/Swiper'
import SwiperDetail from '@/pages/Goods/SwiperDetail'
import Category from '@/pages/Recommend/Category'
import index from '../pages/Recommend/index'
Vue.use(Router)

const router= new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'index',
    //   component:index
    // },
    {
      path: '/',
      name: 'Home',
      component:Home
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Swiper',
      name: 'Swiper',
      component: Swiper
    },
    {
      path: '/SwiperDetail',
      name: 'goods',
      component: SwiperDetail
    },  
  ]
});

export default router;
