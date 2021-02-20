import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import jobs from '../views/job/jobs.vue'
import jobDetails from '../views/job/jobDetails.vue'
import notFound from '@/views/notFound'
const routes = [
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
  },
  {
    path: '/jobs',
    name: 'job',
    component: jobs
  },
  {
    path: '/jobs/:id',
    name: 'jobDetails',
    component: jobDetails,
    props:true
  },
  {
    path:'/all-jobs',
    redirect:'/jobs'
  },
  {
    path:'/:catchAll(.*)',
    name:'notFound',
    component:notFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
