<template>
  <div class="left-menu">
    <div class="header" :class="{ 'header-collapse': collapse }">
      <img class="logo" src="@/assets/logo.svg" alt="" />
      <p class="logo-text">Element Design Pro</p>
    </div>
    <el-menu
      :default-active="defaultActive"
      :collapse="collapse"
      class="el-menu-vertical-demo"
      router
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon>
            <ep-location />
          </el-icon>
          <span>COC 助手</span>
        </template>
        <el-menu-item index="coc">数据查询</el-menu-item>
        <el-menu-item index="coc-upgrade">升级助手</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><ep-menu /></el-icon>
        <span>Navigator Two</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <el-icon><document /></el-icon>
        <span>Navigator Three</span>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <span>Navigator Four</span>
      </el-menu-item>
    </el-menu>
    <el-icon>
      <icon-ep-aim />
    </el-icon>
  </div>
</template>

<script setup lang="ts">
import { useSettingStore } from '@/stores/settingStore'
const settingStore = useSettingStore()
const collapse = computed(() => !settingStore.menuOpen)
const defaultActive = ref('1')
const router = useRouter()
watch(
  () => router.currentRoute.value.path,
  (val) => {
    defaultActive.value = val
  },
  { immediate: true }
)
</script>

<style scoped lang="scss">
.left-menu {
  .header {
    height: 60px;
    display: flex;
    align-items: center;
    padding: 0 28px;
    .logo {
      width: 24px;
    }
    p {
      font-size: 18px;
      margin-left: 8px;
      // color: #252f4a;
    }
    &.header-collapse {
      padding: 0 20px;
      p {
        display: none;
      }
    }
  }
  .el-menu {
    width: 252px;
    border: none;
  }
  .el-menu--collapse {
    width: 70px;
  }
}
</style>
