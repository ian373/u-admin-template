<template>
  <div
    class="logo-box"
    :class="appStore.menuCollapse ? 'collapse' : ''"
    @click="goHome"
  >
    <img src="@/assets/logo.png" alt="" />
    <span v-show="!appStore.menuCollapse">UAdminTemp</span>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

import { useAppStore } from "@/store/app";

const appStore = useAppStore();
const router = useRouter();

const goHome = () => {
  if (router.currentRoute.value.path !== "/dashboard") {
    router.push("/dashboard");
  }
};
</script>

<style scoped lang="scss">
@use "./const.scss";
.logo-box {
  // width不能设为100%或auto，不然transition效果异常
  // 宽度设为最小侧边栏宽度200px
  width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: const.$mBgColor;
  cursor: pointer;
  overflow: hidden;
  //动画函数和elment的动画函数不一样，不能完全拟合
  transition: width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  padding-left: 12px;
  img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
  span {
    padding-left: 5px;
    transition: all 0.3s ease;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
  }
}
.logo-box.collapse {
  width: 56px;
}
</style>
