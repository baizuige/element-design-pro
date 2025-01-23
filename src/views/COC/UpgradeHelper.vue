<template>
  <div class="coc-upgrade-helper">
    <div class="coc-upgrade-helper__header">
      <el-button @click="handelAddUserInfo">添加账号</el-button>
    </div>
    <div class="coc-upgrade-helper__body">
      <el-card
        class="card-container"
        v-for="user in cocUserInfo"
        :key="user.id"
        style="max-width: 480px"
      >
        <template #header>
          <div class="card-header">
            <h2>{{ user.username }}</h2>
            <el-button type="primary" link @click="handelUpgrade(user)"
              >升级</el-button
            >
          </div>
        </template>
        <div class="worker-list">
          <h3>建筑工人 {{ 0 }}/{{ user.workerCount }}</h3>
          <div class="upgrade-list">
            <div
              class="upgrade-item"
              v-for="upgrade in user.upgradeList"
              :key="upgrade?.id"
            >
              <template v-if="upgrade">
                <div class="upgrade-item__name">{{ upgrade.name }}</div>
                <div class="upgrade-item__countDown">
                  <el-countdown
                    format="DD[天] HH[小时] mm[分] ss[秒]"
                    :value="dayjs(upgrade.finishTime)"
                    @finish="finishUpgrade(upgrade)"
                  />
                </div>
              </template>
              <div v-else>空闲！</div>
              <!-- <img class="upgrade-item__img" :src="upgrade.img" alt="" /> -->
            </div>
          </div>
        </div>
      </el-card>
    </div>
    <el-dialog title="添加账号" v-model="userInfoDialogVisible" width="400px">
      <el-form :model="userInfoForm" label-width="120px">
        <el-form-item label="用户名">
          <el-input v-model="userInfoForm.username" />
        </el-form-item>
        <el-form-item label="建筑工人数量">
          <el-input-number
            :min="1"
            :max="6"
            :step="1"
            v-model="userInfoForm.workerCount"
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="userInfoDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="addAccount">确 定</el-button>
        </span>
      </template>
    </el-dialog>
    <el-dialog title="升级" v-model="upgradeDialogVisible" width="480px">
      <el-form :model="upgradeForm" label-width="72px">
        <el-form-item label="升级项目">
          <el-select v-model="upgradeForm.type" placeholder="请选择升级类型">
            <el-option label="建筑" value="building" />
            <el-option label="科技" value="technology" />
            <el-option label="战宠" value="warPet" />
          </el-select>
        </el-form-item>
        <el-form-item label="填写方式">
          <el-radio-group v-model="autoFillOut">
            <el-radio :value="false">手动</el-radio>
            <el-radio :value="true">自动</el-radio>
          </el-radio-group>
        </el-form-item>
        <template v-if="autoFillOut"></template>
        <template v-else>
          <el-form-item label="升级名称">
            <el-input v-model="upgradeForm.name" />
          </el-form-item>
          <el-form-item label="升级时间">
            <div class="dialog-upgrade-time">
              <el-input-number
                style="width: 80px"
                v-model="upgradeForm.time.day"
                :controls="false"
                :min="0"
                :max="30"
                :step="1"
                step-strictly
                ><template #suffix> <span>天</span> </template></el-input-number
              >
              <el-input-number
                style="width: 80px"
                v-model="upgradeForm.time.hour"
                :controls="false"
                :min="0"
                :max="23"
                :step="1"
                step-strictly
                ><template #suffix> <span>时</span> </template></el-input-number
              >
              <el-input-number
                style="width: 80px"
                v-model="upgradeForm.time.minute"
                :controls="false"
                :min="0"
                :max="59"
                :step="1"
                step-strictly
                ><template #suffix> <span>分</span> </template></el-input-number
              >
              <el-input-number
                style="width: 80px"
                v-model="upgradeForm.time.second"
                :controls="false"
                :min="0"
                :max="59"
                :step="1"
                step-strictly
                ><template #suffix> <span>秒</span> </template></el-input-number
              >
            </div>
          </el-form-item>
        </template>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="upgradeDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="addUpgrade">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { dayjs } from 'element-plus'
import { getStorage, setStorage } from '@/utils/'

const cocUserInfo = ref<any>([])
onMounted(() => {
  cocUserInfo.value = getStorage('cocUserInfo') || []
})

function finishUpgrade(upgrade: any) {
  upgrade.isCompleted = true
  console.log('finishUpgrade', upgrade)
  new Notification('待办列表', {
    body: `嘿！您的任务现已过期。`
  })
}

const userInfoDialogVisible = ref(false)
const userInfoForm = ref({
  username: '',
  workerCount: 1
})
function handelAddUserInfo() {
  userInfoDialogVisible.value = true
}

function addAccount() {
  const { username, workerCount } = userInfoForm.value
  if (!username || !workerCount) {
    ElMessage.error('请填写完整信息')
    return
  }
  cocUserInfo.value.push({
    id: crypto.randomUUID(),
    username,
    workerCount,
    upgradeList: Array(workerCount).fill(null)
  })
  setStorage('cocUserInfo', cocUserInfo.value)
  userInfoDialogVisible.value = false
  ElMessage.success('添加成功')
}

const upgradeDialogVisible = ref(false)
const user = ref<any>({})
const upgradeForm = ref({
  type: '',
  name: '',
  time: {
    day: 0,
    hour: 0,
    minute: 0,
    second: 0
  }
})
const autoFillOut = ref(false)
function handelUpgrade(item: any) {
  user.value = item
  upgradeDialogVisible.value = true
}
function addUpgrade() {
  const { type, name, time } = upgradeForm.value
  if (!type || !name || !time) {
    ElMessage.error('请填写完整信息')
    return
  }
  const finishTime = dayjs()
    .add(time.day, 'day')
    .add(time.hour, 'hour')
    .add(time.minute, 'minute')
    .add(time.second, 'second')
    .format('YYYY-MM-DD HH:mm:ss')
  const index = user.value.upgradeList.findIndex((item: any) => !item)
  user.value.upgradeList[index] = {
    id: crypto.randomUUID(),
    name,
    time: dayjs(finishTime).diff(dayjs(), 'second'),
    finishTime,
    isCompleted: false,
    progress: 0
  }
  user.value.upgradeList.sort((a: any, b: any) => {
    return a?.time - b?.time
  })
  setStorage('cocUserInfo', toRaw(cocUserInfo.value))
  upgradeDialogVisible.value = false
  ElMessage.success('添加成功')
}
</script>

<style scoped lang="scss">
.coc-upgrade-helper {
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  &__body {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    .card-container {
      width: 600px;
      .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .upgrade-list {
        margin-top: 10px;
      }
      .upgrade-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        height: 30px;
      }
    }
  }
}

.dialog-upgrade-time {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
