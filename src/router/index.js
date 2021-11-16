import Vue from 'vue'
import VueRouter from 'vue-router'
import Formulario from '../views/Formulario.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Formulario',
    component: Formulario
  },
  {
    path: '/usuarios',
    name: 'Usuarios',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Usuarios.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
