<template>
    <div class="box" @click="fullScreenHandle">
        <MaterialSymbolsFullscreenExit v-if="fullScreen" class="icon" />
        <MaterialSymbolsFullscreen v-else class="icon" />
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { ElMessage } from "element-plus";
import "element-plus/es/components/message/style/css";
import MaterialSymbolsFullscreen from "~icons/material-symbols/fullscreen";
import MaterialSymbolsFullscreenExit from "~icons/material-symbols/fullscreen-exit";

const fullScreen = ref(false);

if (document.fullscreenElement) {
    fullScreen.value = true;
}

const fullScreenHandle = () => {
    const el = document.documentElement;
    // document.fullscreenElement返回的当前全屏的元素，应用在document.documentElement
    // 时返回整个页面的html，不使用此判断是否全屏
    if (!fullScreen.value) {
        if (el.requestFullscreen) {
            el.requestFullscreen();
        } else {
            ElMessage.error("抱歉，当前浏览器不支持全屏");
            return;
        }
        fullScreen.value = !fullScreen.value;
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        fullScreen.value = !fullScreen.value;
    }
};
</script>

<style scoped lang="scss">
@use "../../mixin.scss";

@include mixin.box-style;
.box {
    .icon {
        width: 16px;
        height: 16px;
    }
}
</style>
