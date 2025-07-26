<template>
    <router-view v-slot="{ Component }">
        <!-- 文档：<Transition> 仅支持单个元素或组件作为其插槽内容。 -->
        <!-- 如果内容是一个组件，这个组件必须仅有一个根元素。 -->
        <transition name="fade-slide" mode="out-in" appear>
            <!-- keepalive内部不能通过改变key来刷新组件，因为旧key的组件会被保存下来 -->
            <keep-alive v-if="$route.meta.cache" :key="'cache' + appStore.pageKey">
                <component :is="Component" />
            </keep-alive>
            <component v-else :is="Component" :key="'nocache' + appStore.pageKey" />
        </transition>
    </router-view>
</template>

<script setup lang="ts">
import { useAppStore } from "@/store/app";

const appStore = useAppStore();
</script>

<style scoped lang="scss">
// 路由切换动画
.fade-slide {
    &-enter-active,
    &-leave-active {
        transition:
            transform 0.3s ease,
            opacity 0.3s ease;
    }

    &-enter-from {
        transform: translateX(-20px);
        opacity: 0;
    }

    &-enter-to {
        transform: translateX(0);
        opacity: 1;
    }

    &-leave-from {
        transform: translateX(0);
        opacity: 1;
    }

    &-leave-to {
        transform: translateX(20px);
        opacity: 0;
    }
}
</style>
