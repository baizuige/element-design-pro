import { defineStore } from 'pinia'
import type { MenuListType } from '@/types/menu'

interface MenuState {
  menuList: MenuListType[]
  menuWidth: string
}

export const useMenuStore = defineStore({
  id: 'menuStore',
  state: (): MenuState => ({
    menuList: [],
    menuWidth: ''
  }),
  getters: {
    getMenuList(): MenuListType[] {
      return this.menuList
    }
  },
  actions: {
    setMenuList(list: []) {
      this.menuList = list
    },
    setMenuWidth(width: string) {
      this.menuWidth = width
    }
  }
})
