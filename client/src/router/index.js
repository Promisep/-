import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login/Login'
import Home from '@/pages/Home/Home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component:Login
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    
    
  ]
})
