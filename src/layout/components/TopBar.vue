<template>
  <div class="top-bar">
    <div class="left">
      <div class="btn-box" @click="toggleMenu">
        <el-icon :size="24"><ep-Operation /></el-icon>
      </div>
      <div class="btn-box refresh-btn">
        <el-icon class="refresh" :size="24"><ep-Refresh /></el-icon>
      </div>
    </div>
    <div class="right">
      <el-switch v-model="isDark">
        <template #active-action>
          <el-icon><ep-Moon /></el-icon>
        </template>
        <template #inactive-action>
          <el-icon><ep-Sunny /></el-icon>
        </template>
      </el-switch>
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
const isDark = ref(settingStore.isDark)
watch(isDark, () => {
  settingStore.toggleTheme()
})
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
        color: var(--el-color-primary);
        background-color: var(--el-bg-color-overlay);
      }
      &.refresh-btn {
        &:hover {
          .refresh {
            animation: rotate 0.5s;
          }
        }
      }
    }
  }
  .right {
    display: flex;
    align-items: center;
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
