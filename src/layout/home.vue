<template>
  <div class="frame">
    <MenuLeft />
    <div class="container">
      <router-view></router-view>
    </div>

  </div>
</template>

<script setup lang="ts">
import MenuLeft from './MenuLeft/index.vue'
</script>

<style scoped>

</style>