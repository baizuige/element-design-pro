import { dayjs } from 'element-plus'
export const useCOCStore = defineStore({
  id: 'settingStore',
  state: () => {
    return {
      upgradeList: []
    }
  },
  actions: {
    init() {
      this.upgradeList = JSON.parse(
        localStorage.getItem('upgradeList') || '[]'
      ).map((item: any) => {
        return {
          ...item,
          time: dayjs(item.time)
        }
      })
    },
    getUpgradeList() {
      return this.upgradeList
    },
    addUpgrade(item: any) {
      this.upgradeList.push({
        ...item,
        time: dayjs().add(item.time, 'second')
      })
      localStorage.setItem('upgradeList', JSON.stringify(this.upgradeList))
    }
  }
})
