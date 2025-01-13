import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    redirect: '/coc',
    component: () => import('@/layout/DefaultLayout.vue'),
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/DashBoard.vue')
      },
      {
        path: '/coc',
        name: 'coc',
        component: () => import('@/views/COC/CocHelper.vue')
      },
      {
        path: '/coc-upgrade',
        name: 'coc-progress',
        component: () => import('@/views/COC/UpgradeHelper.vue')
      }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
