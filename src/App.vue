<template>
    <RouterView />
</template>

<script setup lang="ts">
import { useAppStore } from "@/store/app";

const appStore = useAppStore();
// 判断浏览器视口宽度，低于断点使用mobile模式
const setMobileMode = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 992) {
        if (!appStore.isMobile) {
            appStore.toggleMobile();
        }
    } else {
        if (appStore.isMobile) {
            appStore.toggleMobile();
        }
    }
};
setMobileMode();
// 第一次载入应用，如果时mobile状态，menuCollapse应该为true，即关闭drawerMenu
if (appStore.isMobile) {
    appStore.toggleMenuCollapse();
}

// 设置app的宽度
const setHeight = () => {
    const height = window.innerHeight;
    (document.getElementById("app") as HTMLElement).style.height = height + "px";
};
setHeight();

window.addEventListener("resize", () => {
    setHeight();
    setMobileMode();
});

// 移除首屏加载动画
document.getElementById("app-first-loading")?.remove();
</script>

<style>
#app {
    width: 100%;
}
</style>
