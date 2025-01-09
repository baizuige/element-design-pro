<template>
  <div class="top-bar">
    <div class="left">
      <div class="btn-box" @click="toggleMenu">
        <el-icon :size="24"><ep-Operation color="#78829d" /></el-icon>
      </div>
      <div class="btn-box refresh-btn">
        <el-icon class="refresh" :size="24"><ep-Refresh color="#78829d" /></el-icon>
      </div>
    </div>
    <div class="right">
      <el-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSettingStore } from '@/stores/settingStore'
const settingStore = useSettingStore()
function toggleMenu() {
  settingStore.toggleMenu()
}
</script>

<style scoped lang="scss">
.top-bar {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px 0 10px;
  .left {
    display: flex;
    align-items: center;
    .btn-box {
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      margin-right: 10px;
      cursor: pointer;
      &:hover {
        background-color: #f5f5f5;
      }
      &.refresh-btn {
        &:hover {
          .refresh {
            animation: rotate .5s;
          }
        }
      }
    }
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
}
</style>
