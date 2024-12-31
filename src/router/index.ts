import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'
import { useMenuStore } from '@/store/modules/menu'

type AppRouteRecordRaw = RouteRecordRaw & {
  hidden?: boolean
}

const routes: AppRouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/layout/home.vue'),
    // children: [
    //   {
    //     path: '/dashboard',
    //     name: 'Dashboard',
    //     redirect: '/dashboard/analysis',
    //     children: [
    //       {
    //         path: '/dashboard/analysis',
    //         name: 'Analysis',
    //         component: () => import('@/views/dashboard/analysis.vue'),
    //         meta: {
    //           title: '分析页',
    //           title_en: 'Analysis',
    //           icon: 'dashboard'
    //         }
    //       }
    //     ]
    //   }
    // ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  useMenuStore().setMenuList(routes as [])
  next()
})

export default router
