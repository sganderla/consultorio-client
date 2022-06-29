import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/especialidade/listar',
    name: 'especialidade-listar',
    component: () => import(/* webpackChunkName: "list" */ '../views/especialidade/especialidade-list.vue')
  },
  {
    path: '/especialidade/formulario',
    name: 'especialidade-cadastrar',
    component: () => import(/* webpackChunkName: "form" */ '../views/especialidade/especialidade-form.vue')
  },
  {
    path: '/especialidade/formulario/:model/:id',
    name: 'especialidade-detalhar',
    props: (router) => ({ id: router.params.id, model: router.params.model }),
    component: () => import(/* webpackChunkName: "form" */ '../views/especialidade/especialidade-form.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
