import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw, RouteLocationNormalized, NavigationGuardNext } from 'vue-router'
import { useMenuStore } from '@/store/modules/menu'
import { useUserStore } from '@/store/modules/user'

type GuardParams = {
  to: RouteLocationNormalized
  next: NavigationGuardNext
}

type AppRouteRecordRaw = RouteRecordRaw & {
  hidden?: boolean
}

const routes: AppRouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
      title_en: 'Login',
      isHideTab: true
    },
    component: () => import('@/views/user/login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/layout/home.vue')
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

router.beforeEach((to, _, next) => {
  checkLogin({ to, next })
  useMenuStore().setMenuList(routes as [])
})

function checkLogin({ to, next }: GuardParams) {
  const userStore = useUserStore()
  const { meta, path } = to
  // 判断是否需要登录
  const { noLogin } = meta
  if (!userStore.isLogin && path !== '/login' && !noLogin) {
    userStore.logout()
    next('/login')
  } else {
    next()
  }
}

export default router
