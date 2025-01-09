<template>
  <div class="default-layout" >
    <LeftMenu />
    <div class="main-content">
      <TopMenu />
      <div class="main-content-view">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LeftMenu from './components/LeftMenu.vue'
import TopMenu from './components/TopBar.vue'
</script>

<style scoped lang="scss">
.default-layout {
  display: flex;
  flex-direction: row;
  height: 100vh;
  background-color: #fafbfc;
  .main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
    &-view {
      flex: 1;
      margin: 20px 30px;
      background-color: #fff;
      overflow-y: auto;
      border-radius: 5px;
    }
  }
}
</style>
