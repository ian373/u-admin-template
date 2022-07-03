<template>
  <router-view v-slot="{ Component }">
    <!-- 文档：<Transition> 仅支持单个元素或组件作为其插槽内容。 -->
    <!-- 如果内容是一个组件，这个组件必须仅有一个根元素。 -->
    <transition name="fade">
      <!-- keepalive内部不能通过改变key来刷新组件，因为旧key的组件会被保存下来 -->
      <keep-alive v-if="$route.meta.cache" :key="appStore.mainReloadKP">
        <component :is="Component" />
      </keep-alive>
      <component v-else :is="Component" :key="appStore.mainReloadKey" />
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import { useAppStore } from "@/store/app";

const appStore = useAppStore();
</script>

<style scoped lang="scss">
// 路由切换动画
.fade-enter-from {
  transform: translate(-20px);
  opacity: 0;
}

.fade-enter-active {
  transition: transform 0.3s ease-out 0.3s, opacity 0.3s ease-out 0.3s;
}
.fade-enter-to {
  transform: translate(0);
  opacity: 1;
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: transform 0.3s ease-in, opacity 0.3s ease-in;
}
.fade-leave-to {
  opacity: 0;
  transform: translate(20px);
}
</style>
