export const useSettingStore = defineStore({
  id: 'settingStore',
  state: () => {
    return {
      menuOpen: true
    }
  },
  actions: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    }
  }
})
