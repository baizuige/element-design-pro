<template>
  <div class="left-menu">
    <div class="header" :class="{ 'header-collapse': collapse }">
      <img class="logo" src="@/assets/logo.svg" alt="" />
      <p class="logo-text">Element Design Pro</p>
    </div>
    <el-menu
      default-active="2"
      :collapse="collapse"
      class="el-menu-vertical-demo"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon>
            <ep-location />
          </el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group title="Group One">
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title>item four</template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
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
</script>

<style scoped lang="scss">
.left-menu {
  background-color: #fff;
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
      color: #252f4a;
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
