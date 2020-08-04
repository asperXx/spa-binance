import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name:'Depth',
    component: () => import('../views/Depth.vue')
  },
  {
    path: '/symbols',
    name: 'Symbols',
    component: () => import('../views/Symbols.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
