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
  // BUG:不管使用下面的方法还是注释的方法，首次切换要加载的组件都会有闪动现象
  // 延迟0.3秒，等上一个元素执行完动画后再执行
  transition: transform 0.3s ease-out 0.3s, opacity 0.3s ease-out 0.3s;
  // 可以使用<transition name="fade" mode="out-in">然后上面就不需要设置延迟了
  // 但是实际使用发现会出现闪动，还是暂用这种方法
}
.fade-enter-to {
  transform: translate(0);
  opacity: 1;
}
.fade-leave-from {
  transform: translate(0);
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
