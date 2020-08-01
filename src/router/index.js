
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import SignUp from '../views/signup'
import SignIn from '../views/signin'
import Faq from '../views/faq'
import Admin from '../views/admin'
import AdminDuty from '../views/dashboard/duty'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: Home
  },
  {
    path: '/Sign-Up',
    name: 'signingup',
    component: SignUp,
  },
  {
    path: '/SignIn',
    name: 'signingin',
    component: SignIn,
  },
  {
    path: '/frequently-asked-question',
    name: 'FreAskQues',
    component: Faq,
  },
  {
    path: '/dashboard',
    name: 'AdminDashboard',
    component: Admin,
  },
  {
    path: `/dashboard/duty`,
    name: 'DashboardDuty',
    component: AdminDuty,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router