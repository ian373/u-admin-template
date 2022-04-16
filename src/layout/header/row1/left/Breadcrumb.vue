<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="name of breadcrumbList" :key="name"
      >{{ name }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed, ref, watch, Ref } from "vue";

const route = useRoute();
const currentPath = computed(() => route.path);
const breadcrumbList = ref([]) as Ref<string[]>;

// matched顺序：父路-->由外到内-->当前路由
const setBreadcrumb = () => {
  const titleList: string[] = [];
  for (let x of route.matched) {
    if (x.meta.title) {
      if (x.meta.title === "Dashboard") {
        titleList.push("首页");
      } else {
        titleList.push(x.meta.title as string);
      }
    }
  }
  breadcrumbList.value = titleList;
};
setBreadcrumb();
watch(currentPath, setBreadcrumb);
</script>

<style scoped lang="scss">
.el-breadcrumb {
  margin-left: 8px;
}
</style>
