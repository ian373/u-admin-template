<template>
  <el-container class="layout-box">
    <template v-if="!appStore.isMobile">
      <el-aside v-show="!appStore.expandMain">
        <SiderVue />
      </el-aside>
    </template>
    <MobileSiderVue v-else />
    <el-container>
      <el-header><HeaderVue /></el-header>
      <el-main v-loading="appStore.mainLoading">
        <router-view v-slot="{ Component }">
          <!-- 文档：<Transition> 仅支持单个元素或组件作为其插槽内容。 -->
          <!-- 如果内容是一个组件，这个组件必须仅有一个根元素。 -->
          <transition name="fade">
            <component :is="Component" :key="appStore.mainReloadKey" />
          </transition>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
// 使用elment-plus官方两个插件后，自动注册组件，不需要手动导入，也不需要在main.ts中注册
import SiderVue from "./sider/index.vue";
import HeaderVue from "./header/index.vue";
import MobileSiderVue from "./sider/mobile/index.vue";

import { useAppStore } from "@/store/app";

const appStore = useAppStore();
</script>

<style scoped lang="scss">
.layout-box {
  height: 100%;
  .el-aside {
    width: auto;
  }
  .el-container {
    .el-header {
      padding: 0;
      height: auto;
    }
    .el-main {
      position: relative;
      background-color: lightgray;
    }
  }
}

// 路由切换动画
.fade-enter-from {
  transform: translate(-20px);
  opacity: 0;
}

.fade-enter-active {
  position: absolute;
  transition: all 0.3s ease-out 0.3s;
}
.fade-enter-to {
  transform: translate(0);
  opacity: 1;
}
.fade-leave-from {
  opacity: 0.5;
}
.fade-leave-active {
  position: absolute;
  transition: all 0.3s ease-in;
}
.fade-leave-to {
  transform: translate(20px);
}
</style>
