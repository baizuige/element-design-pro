<template>
  <div class="login-container flex bg-[#306fe6]">
    <!-- <div class="left-container flex-1 flex justify-center items-center">
      <img src="@/assets/imgs/no-permissions.svg" alt="" class="w-[43rem]" />
    </div> -->
    <div class="right-container flex-1 relative">
      <div class="login-form bg-white w-[25rem] rounded-md  h-auto m-auto py-4 px-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h3 class="title text-4xl font-bold text-slate-800">欢迎回来</h3>
        <p class="sub-title mt-2 text-slate-400">请输入您的账号和密码</p>
        <div class="input-wrap mt-6">
          <el-input placeholder="请输入账号" size="large" v-model.trim="username" />
        </div>
        <div class="input-wrap mt-6">
          <el-input
            placeholder="请输入密码"
            size="large"
            v-model.trim="password"
            type="password"
            radius="8px"
            autocomplete="off"
            @keyup.enter="login"
          />
        </div>
        <div class="mt-2 flex justify-between items-center">
          <el-checkbox v-model="rememberPassword" label="记住密码" size="large" />
          <router-link to="/forget-password" class="ml-2 text-slate-400 text-sm"
            >忘记密码</router-link
          >
        </div>
        <div class="mt-6">
          <el-button class="w-full" type="primary" size="large" @click="login">登录</el-button>
        </div>
        <div class="mt-4 text-center text-slate-400 text-sm">
          没有账号？<router-link to="/register" class="text-[#409eff]">立即注册</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const username = ref<string>('')
  const password = ref<string>('')
  const rememberPassword = ref<boolean>(false)

  function login() {
    
  }
</script>
<style scoped></style>

