<template>
  <el-config-provider :size="elSize" :locale="locales[language]" :z-index="3000">
    <router-view ></router-view>
  </el-config-provider>
</template>

<script setup lang="ts">
  import en from 'element-plus/es/locale/lang/en'
  import zh from 'element-plus/es/locale/lang/zh-cn'
  import { useUserStore } from '@/store/modules/user'

  const userStore = useUserStore()
  const elSize = computed(() => {
    return document.body.clientWidth >= 500 ? 'large' : 'default'
  })
  const locales = {
    zh,
    en
  }
  const language = computed(() => {
    return userStore.language
  })

</script>

<style scoped></style>

