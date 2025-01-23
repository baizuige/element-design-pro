<template>
  <div class="coc-helper-container">
    <el-card style="max-width: 240px" v-for="item in buildList" :key="item.id">
      <template #header>
        <div class="card-header">
          <span>{{ item.name }}</span>
          <el-popover :width="460" trigger="click">
            <template #reference>
              <el-button type="primary" link>详情</el-button>
            </template>
            <el-table border stripe :data="item.upgradeList" height="460px">
              <el-table-column
                width="60"
                align="center"
                property="level"
                label="等级"
              />
              <el-table-column
                width="100"
                align="center"
                property="cost"
                label="升级花费"
              />
              <el-table-column
                width="100"
                align="center"
                property="time"
                label="升级时间"
              >
                <template #default="{ row }">
                  <span v-if="row.time < 60">{{ row.time }} 秒</span>
                  <span v-else-if="row.time < 3600"
                    >{{ row.time / 60 }} 分钟</span
                  >
                  <span v-else-if="row.time < 86400"
                    >{{ row.time / 3600 }} 小时</span
                  >
                  <span v-else
                    >{{ Math.floor(row.time / 86400) }}天
                    <span v-if="row.time % 86400 > 0"
                      >{{ Math.floor((row.time % 86400) / 3600) }} 小时</span
                    >
                  </span>
                </template>
              </el-table-column>
              <el-table-column
                width="100"
                align="center"
                property="townLevel"
                label="大本营等级要求"
              />
              <el-table-column width="60" align="center" label="操作">
                <template #default="{ row }">
                  <el-button
                    type="primary"
                    link
                    @click="addToUpGradeList(row, item.id)"
                    >升级</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
          </el-popover>
        </div>
      </template>
      <img :src="item.imgUrl" style="width: 100%" />
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { dayjs } from 'element-plus'

const buildList = [
  {
    type: 1, // 1: 防御建筑
    name: '加农炮',
    id: 1,
    imgUrl:
      'https://raw.githubusercontent.com/baizuige/picbed/master/picture/202501131632327.png',
    upgradeList: [
      {
        level: 1,
        cost: 250,
        time: 10, // 秒
        // 大本营等级要求
        townLevel: 1
      },
      {
        level: 2,
        cost: 1000,
        time: 2 * 60,
        townLevel: 1
      },
      {
        level: 3,
        cost: 4000,
        time: 10 * 60,
        townLevel: 2
      },
      {
        level: 4,
        cost: 16000,
        time: 45 * 60,
        townLevel: 3
      },
      {
        level: 5,
        cost: 50000,
        time: 60 * 60,
        townLevel: 4
      },
      {
        level: 6,
        cost: 100000,
        time: 2 * 60 * 60,
        townLevel: 5
      },
      {
        level: 7,
        cost: 150000,
        time: 4 * 60 * 60,
        townLevel: 6
      },
      {
        level: 8,
        cost: 240000,
        time: 6 * 60 * 60,
        townLevel: 7
      },
      {
        level: 9,
        cost: 360000,
        time: 8 * 60 * 60,
        townLevel: 8
      },
      {
        level: 10,
        cost: 500 * 1000,
        time: 10 * 60 * 60,
        townLevel: 8
      },
      {
        level: 11,
        cost: 800 * 1000,
        time: 12 * 60 * 60,
        townLevel: 9
      },
      {
        level: 12,
        cost: 900 * 1000,
        time: 14 * 60 * 60,
        townLevel: 10
      },
      {
        level: 13,
        cost: 1700 * 1000,
        time: 16 * 60 * 60,
        townLevel: 10
      },
      {
        level: 14,
        cost: 2000 * 1000,
        time: 18 * 60 * 60,
        townLevel: 11
      },
      {
        level: 15,
        cost: 2200 * 1000,
        time: 20 * 60 * 60,
        townLevel: 11
      },
      {
        level: 16,
        cost: 2500 * 1000,
        time: 24 * 60 * 60,
        townLevel: 12
      },
      {
        level: 17,
        cost: 3000 * 1000,
        time: 1.5 * 24 * 60 * 60,
        townLevel: 12
      },
      {
        level: 18,
        cost: 3500 * 1000,
        time: 2 * 24 * 60 * 60,
        townLevel: 13
      },
      {
        level: 19,
        cost: 4000 * 1000,
        time: 2.5 * 24 * 60 * 60,
        townLevel: 13
      },
      {
        level: 20,
        cost: 5000 * 1000,
        time: 3 * 24 * 60 * 60,
        townLevel: 14
      },
      {
        level: 21,
        cost: 6000 * 1000,
        time: 3.5 * 24 * 60 * 60,
        townLevel: 15
      }
    ]
  }
]

function addToUpGradeList(item: any, id: number) {
  const info = buildList.find((item) => item.id === id)
  const cocUpgradeList = JSON.parse(
    localStorage.getItem('cocUpgradeList') || '[]'
  )
  cocUpgradeList.push({
    id,
    img: info?.imgUrl,
    name: info?.name,
    level: item.level,
    finishTime: dayjs().add(item.time, 'second').format('YYYY-MM-DD HH:mm:ss'),
    time: item.time
  })
  localStorage.setItem('cocUpgradeList', JSON.stringify(cocUpgradeList))
}
</script>

<style scoped lang="scss">
.coc-helper-container {
  padding: 20px 30px;
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
