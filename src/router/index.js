
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import SignUp from '../views/signup'
import SignIn from '../views/signin'
import Faq from '../views/faq'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: Home
  },
  {
    path: '/SignUp',
    name: 'signingup',
    component: SignUp,
  },
  {
    path: '/SignIn',
    name: 'signingin',
    component: SignIn,
  },
  {
    path: '/Faq',
    name: 'faq',
    component: Faq,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router