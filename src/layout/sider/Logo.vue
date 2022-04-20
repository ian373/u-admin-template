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
  // width不能设为100%，不然会没有transition效果
  width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: const.$mBgColor;
  cursor: pointer;
  //动画函数和elment的动画函数不一样，不能完全拟合
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  padding-left: 12px;
  img {
    width: 30px;
    height: 30px;
  }
  span {
    padding-left: 5px;
    transition: all 0.3s ease;
    overflow: hidden;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
  }
}
.logo-box.collapse {
  width: 56px;
}
</style>
