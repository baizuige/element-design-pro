<template>
  <div class="menu-left">
    <el-menu>
      <submenu :list="menuList" />
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import {useMenuStore} from "@/store/modules/menu"
import submenu  from './submenu.vue'
const menuList = computed(() => {
  return useMenuStore().getMenuList
})
</script>

<style scoped>

</style>