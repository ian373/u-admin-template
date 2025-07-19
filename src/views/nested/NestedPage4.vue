<template>
    <!-- 需要被一个元素包裹，不然会出现<routerViewCompVue/>组件直接嵌套，vue会报warning -->
    <div style="position: relative"><RouterViewCompVue /></div>
</template>

<script setup lang="ts">
import RouterViewCompVue from "@/components/layout/RouterViewComp.vue";
</script>
