<template>
    <router-view v-slot="{ Component }">
        <!-- 文档：<Transition> 仅支持单个元素或组件作为其插槽内容。 -->
        <!-- 如果内容是一个组件，这个组件必须仅有一个根元素。 -->
        <transition name="fade-slide" mode="out-in" appear>
            <keep-alive :max="10" :include="appStore.cachedComponents">
                <component :is="Component" :key="appStore.pageKey" />
            </keep-alive>
        </transition>
    </router-view>
</template>

<script setup lang="ts">
import { useAppStore } from "@/store/app";
import { watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const appStore = useAppStore();
watch(
    () => route.fullPath,
    () => {
        // 如果路由配置了meta.cache，则将组件名加入缓存列表
        if (route.meta.cache) {
            // 获取当前路由对应的组件
            const comp = route.matched.slice(-1)[0]?.components?.default;
            // console.log(comp);
            /*
            组件的名称，有下面几种情况：
            1. 如果.vue文件中显示有设置name属性，会有name字段；
            ```vue
            <script setup lang="ts">
            defineOptions({
                name: "ComponentName",
            });
            ```
            comp.name为"ComponentName"

            2. 如果.vue文件没有显示设置name属性，但是.vue文件存在<script setup>，会有__name字段；但是不知道依赖__name的稳定性如何
             */
            // @ts-expect-error comp.__name不存在类型声明中
            const compName = comp?.name || comp?.__name || null;
            if (compName) {
                appStore.addCachedComponent(compName);
            }
        }
    },
    { immediate: true },
);
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
