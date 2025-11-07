import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Main from '../components/Paginas/VisaoG.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/teste',
      name:'teste',
      component: () => import('../components/Paginas/VisaoG.vue'),
    },
    {
      path:'/transacoes',
      name:'transacoes',
      component: () => import('../components/Paginas/Transações.vue'),
    },
    {
      path:'/relatorios',
      name: 'relatorios',
      component: () => import('../components/Paginas/Relatorios.vue'),
    },
    {
      path: '/config',
      name:'config',
      component: () => import('../components/Paginas/Config.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
