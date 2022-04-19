<template>
  <div class="box" @click="fullScreenHandle">
    <svg class="iconfont" aria-hidden="true">
      <use
        :xlink:href="
          fullScreen ? '#icon-fullscreen-expand-filling' : '#icon-expand'
        "
      ></use>
    </svg>
  </div>
</template>

<script setup lang="ts">
// @ts-nocheck
import { ref } from "vue";

import { ElMessage } from "element-plus";
import "element-plus/es/components/message/style/css";

const fullScreen = ref(false);

if (document.fullscreenElement) {
  fullScreen.value = true;
}

const fullScreenHandle = () => {
  let el = document.documentElement;
  // document.fullscreenElement返回的当前全屏的元素，应用在document.documentElement
  // 时返回整个页面的html，不使用此判断是否全屏
  if (!fullScreen.value) {
    if (el.requestFullscreen) {
      el.requestFullscreen();
    } else if (el.mozRequestFullScreen) {
      el.mozRequestFullScreen();
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen();
    } else if (el.msRequestFullscreen) {
      el.msRequestFullscreen();
    } else {
      ElMessage.error("抱歉，当前浏览器不支持全屏");
      return;
    }
    fullScreen.value = !fullScreen.value;
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
    fullScreen.value = !fullScreen.value;
  }
};
</script>

<style scoped lang="scss">
@use "../../mixin.scss";

@include mixin.box-style;
.box {
  .iconfont {
    width: 16px;
    height: 16px;
  }
}
</style>
