<template>
  <el-config-provider :local="local" :size="size" :z-index="zIndex">
    <router-view />
  </el-config-provider>
</template>

<script setup lang="ts">
import { zhCn } from 'element-plus/es/locale/index.mjs'
const defaultConfig = reactive({
  zIndex: 3000,
  size: 'default',
  local: zhCn
})

const { zIndex, size, local } = toRefs(defaultConfig)
onMounted(() => {
  Notification.requestPermission((result) => {
    console.log(result)
  })
})
</script>

<style scoped></style>
