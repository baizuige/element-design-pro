import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)
export const useSettingStore = defineStore({
  id: 'settingStore',
  state: () => {
    return {
      menuOpen: true,
      isDark: isDark
    }
  },
  actions: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
    toggleTheme() {
      toggleDark()
    }
  }
})
