import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/team',
    name: 'team',
    component: () => import('@/views/Team.vue')
  },
  {
    path: '/research',
    name: 'research',
    component: () => import('@/views/Research.vue')
  },
  {
    path: '/AutonomousDrivingForum',
    name: 'AutonomousDrivingForum',
    component: () => import('@/views/event/AutonomousDrivingForum.vue')
  },
  {
    path: '/ADChallenge',
    name: 'ADChallenge',
    component: () => import('@/views/event/ADChallenge.vue')
  },
  {
    path: '/E2EADWorkshop',
    name: 'E2EADWorkshop',
    component: () => import('@/views/event/E2EADWorkshop.vue')
  },
  {
    path: '/SR4ADWorkshop',
    name: 'SR4ADWorkshop',
    component: () => import('@/views/event/SR4ADWorkshop.vue')
  },
  {
    path: '/Publication',
    name: 'Publication',
    component: () => import('@/views/Publication.vue')
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import('../views/AboutView.vue')
  // },
]

const router = new VueRouter({
  mode: 'hash',
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
