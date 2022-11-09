import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    children: [
      { path: 'base_01', name: 'base_01', component: () => import('../views/base/01.vue') },
      { path: 'point_01', name: 'point_01', component: () => import('../views/point/01.vue') }
    ]
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
