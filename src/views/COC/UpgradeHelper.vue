<template>
  <div>
    <el-card style="max-width: 480px">
      <div class="upgrade-list">
        <div
          v-for="upgrade in upgradeList"
          :key="upgrade.id"
          class="upgrade-item"
        >
          <img class="upgrade-item__img" :src="upgrade.img" alt="" />
          <div class="upgrade-item__content">
            <div class="upgrade-item__progress">
              <el-progress
                :text-inside="true"
                :stroke-width="26"
                :percentage="70"
              />
            </div>
            <div class="upgrade-item__countDown">
              <el-countdown
                format="DD[天] HH[小时] mm[分] ss[秒]"
                :value="upgrade.time"
              />
            </div>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { dayjs } from 'element-plus'

const upgradeList = ref<any>([])
onMounted(() => {
  upgradeList.value = JSON.parse(
    localStorage.getItem('cocUpgradeList') || '[]'
  ).map((item: any) => {
    return {
      ...item,
      progress: Math.floor(dayjs().diff(dayjs(item.time), 'second'))
      time: dayjs(item.time)
    }
  })
  setInterval(() => {

  }, 30 * 1000)
})
</script>

<style scoped lang="scss">
.upgrade-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  &__img {
    width: 60px;
    height: 60px;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-right: 20px;
  }
  &__content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}
</style>
