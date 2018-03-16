import Vue from 'vue'
import Router from 'vue-router'
import FrontPage from '@/components/frontPage'
import Login from '@/components/login';
import Signup from '@/components/Signup';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'FrontPage',
      component: FrontPage
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }
  ]
})
