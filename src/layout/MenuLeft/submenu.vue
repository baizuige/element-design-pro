<template>
  <template v-for="item in list" :key="item.id">
    <el-sub-menu v-if="!item.children" :index="item.path || item.meta.title" :level="level">
      <template #title>
        <i
          class="menu-icon iconfont-sys"
          v-html="item.meta?.icon"
        ></i>
        <span class="menu-name">{{ getMenuTitle(item) }}</span>
        <!-- <div class="badge" style="right: 35px" v-if="item.meta.showBadge"></div> -->
      </template>
      <!-- 递归菜单 -->
      <submenu :list="item.children" :isMobile="isMobile" @close="closeMenu" :level="level + 1" />
    </el-sub-menu>

    <el-menu-item
      v-else
      :index="item.path || item.meta.title"
      @click="goPage(item)"
      :level-item="level + 1"
    >
      <template #title>
        <i class="menu-icon iconfont-sys" v-html="item.meta.icon"></i>
        <span class="menu-name">{{ getMenuTitle(item) }}</span>
        <div class="badge" v-if="item.meta.showBadge"></div>
        <div class="text-badge" v-if="item.meta.showTextBadge">
          <small class="custom-text">{{ item.meta.showTextBadge }}</small>
        </div>
      </template>
    </el-menu-item>
  </template>
</template>

<script setup lang="ts">
  import type { MenuListType } from '@/types/menu'
  defineProps({
    list: { type: [Array] as PropType<MenuListType[]>, default: () => [] },
    isMobile: {
      type: Boolean,
      default: false
    },
    level: {
      type: Number,
      default: 1
    }
  })

  const router = useRouter()

  function getMenuTitle(item: MenuListType) {
    console.log(item)
    return item.meta?.title
  }

  function goPage(item: MenuListType) {
    let { link } = item.meta
    if (link) {
      window.open(link, '_blank')
    } else {
      router.push(item.path || item.meta.title)
    }
  }

  const emit = defineEmits(['close'])
  function closeMenu() {
    emit('close')
  }
</script>

<style scoped></style>
