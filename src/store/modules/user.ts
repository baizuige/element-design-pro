import { defineStore } from 'pinia'
import { LanguageEnum } from '@/enums/appEnum'
import type { UserInfoType } from '@/types/store'
import { getSysStorage } from '@/utils/storage'
import router from '@/router'

interface UserState {
  // 语言
  language: LanguageEnum
  isLogin: boolean
  info: Partial<UserInfoType>
}

export const useUserStore = defineStore({
  id: 'userStore',
  state: (): UserState => ({
    language: LanguageEnum.ZH,
    info: {},
    isLogin: false
  }),
  getters: {
    getUserInfo(): Partial<UserInfoType> {
      return this.info
    }
  },
  actions: {
    initState() {
      let sys = getSysStorage()
      if (sys) {
        sys = JSON.parse(sys)
        const { info, isLogin, language } = sys.user
        this.info = info || {}
        this.language = language || LanguageEnum.ZH
        this.isLogin = isLogin || false
      }
    },
    saveUserData() {
      saveStoreStorage({
        user: {
          info: this.info,
          language: this.language
        }
      })
    },
    logout() {
      this.isLogin = false
      this.info = {}
      this.saveUserData()
      // setTimeout(() => {
      //   router.push('/login')
      // }, 300)
    }
  }
})

function initVersion(version: string) {
  const vs = localStorage.getItem('version')
  if (!vs) {
    localStorage.setItem('version', version)
  }
}

function saveStoreStorage<T>(newData: T) {
  const version = import.meta.env.VITE_VERSION
  initVersion(version)
  const vs = localStorage.getItem('version') || version

  const storedData = JSON.parse(localStorage.getItem(`sys-v${vs}`) || '{}')

  const mergedData = { ...storedData, ...newData }
  localStorage.setItem(`sys-v${vs}`, JSON.stringify(mergedData))
}