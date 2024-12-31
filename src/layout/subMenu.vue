<template>
  <template v-for="item in list" :key="item.id" >
    <el-sub-menu :index="item.path || item.meta.title" v-if="item.children && item.children.length"></el-sub-menu>
    <el-menu-item :index="item.path || item.meta.title" v-else></el-menu-item>
  </template>
</template>

<script lang="ts" setup>
type MenuListType = {
  id: number,
  name?: string,
  path: string,
  meta: {
    title: string
  }
  children?: MenuListType[]
}
defineProps({
  list: {
    type: Array as () => MenuListType[],
    default: () => []
  },
  level: {
    type: Number,
    default: 0
  }
})
</script>

<style scoped>

</style>