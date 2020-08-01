
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import SignUp from '../views/signup'
import SignIn from '../views/signin'
import Faq from '../views/faq'
import Admin from '../views/admin'
import AdminDuty from '../views/dashboard/duty'
<<<<<<< HEAD
import UserView from '../views/user-view/report'
=======
import Health from '../views/dashboard/health'
import Sanitation from '../views/dashboard/sanitation'
import VisitorRecord from '../views/dashboard/record'
import Security from '../views/dashboard/security'
import Feedback from '../views/dashboard/feedback'
>>>>>>> 37ae6464fae9952a9cd02a3f66046d68088f1483

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
  },
  {
<<<<<<< HEAD
    path: `/user-view/report`,
    name: 'user-report',
    component: UserView,
  }
=======
    path: '/dashboard/health',
    name: 'DashboardHealth',
    component: Health,
  },
  {
    path: '/dashboard/sanitation',
    name: 'DashboardSanitation',
    component: Sanitation,
  },
  {
    path: '/dashboard/record',
    name: 'VisitorRecord',
    component: VisitorRecord,
  },
  {
    path: '/dashboard/security',
    name: 'DashboardSecurity',
    component: Security,
  },
  {
    path: '/dashboard/feedback',
    name: 'DashboardFeedback',
    component: Feedback,
  },
>>>>>>> 37ae6464fae9952a9cd02a3f66046d68088f1483
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router