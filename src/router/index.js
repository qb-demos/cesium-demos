import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    children: [
      { path: 'base_01', name: 'base_01', component: () => import('../views/base/01.vue') },
      { path: 'base_01_a', name: 'base_01_a', component: () => import('../views/base/01-a.vue') },
      { path: 'base_02', name: 'base_02', component: () => import('../views/base/02.vue') },
      { path: 'base_03', name: 'base_03', component: () => import('../views/base/03.vue') },
      { path: 'base_04', name: 'base_04', component: () => import('../views/base/04.vue') },
      { path: 'base_05', name: 'base_05', component: () => import('../views/base/05.vue') },
      { path: 'base_06', name: 'base_06', component: () => import('../views/base/06.vue') },
      { path: 'base_07', name: 'base_07', component: () => import('../views/base/07.vue') },
      { path: 'base_08', name: 'base_08', component: () => import('../views/base/08.vue') },
      { path: 'point_01', name: 'point_01', component: () => import('../views/point/01.vue') }
    ]
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
