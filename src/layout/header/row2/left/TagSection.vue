<template>
  <el-scrollbar>
    <div class="tag-box">
      <el-tag
        class="dashboard-tag"
        @click="goHome"
        :effect="$route.path === '/dashboard' ? 'dark' : 'plain'"
        >首页</el-tag
      >
      <el-tag
        class="render-tags"
        closable
        v-for="(tag, index) of tagBoxStore.tagList"
        :key="tag.path"
        @click="clickTag(tag)"
        @close="closeTag(tag, index)"
        :effect="$route.path === tag.path ? 'dark' : 'plain'"
        >{{ tag.name }}
      </el-tag>
    </div>
  </el-scrollbar>
</template>

<script setup lang="ts">
import { watch, onBeforeUnmount } from "vue";
import { useRoute, useRouter } from "vue-router";

import { TagType } from "@/types/tagBox";
import { useTagBoxStore } from "@/store/tagBox";

const tagBoxStore = useTagBoxStore();

const router = useRouter();
const route = useRoute();

// 如果第一次加载的时候不是/dashboard页面，需要添加到tagList
if (route.path !== "/dashboard") {
  tagBoxStore.addTag({
    name: route.meta.title as string,
    path: route.path,
  });
}

watch(router.currentRoute, () => {
  tagBoxStore.addTag({
    name: route.meta.title as string,
    path: route.path,
  });
});

const closeTag = (tag: TagType, index: number) => {
  if (route.path === tag.path) {
    const tagList = tagBoxStore.tagList;
    // 判断tagList是否只剩下一个
    if (tagList.length > 1) {
      router.push(tagList[index].path);
    } else {
      router.push("/dashboard");
    }
  }
  tagBoxStore.delTag(tag);
};

const clickTag = (tag: TagType) => {
  if (route.path === tag.path) {
    return;
  }
  router.push(tag.path);
};

const goHome = () => {
  if (route.path === "/dashboard") {
    return;
  }
  router.push("/dashboard");
};

// 当标签栏被设为隐藏时，清空所有tag
onBeforeUnmount(() => {
  tagBoxStore.delAllTags();
});
</script>

<style scoped lang="scss">
.dashboard-tag,
.render-tags {
  cursor: pointer;
}
.el-scrollbar {
  //TODO: 滚动条如何往下移一点，太靠上了，影响点击tag
  width: 100%;
  margin-left: 8px;
  :deep(.el-scrollbar__view) {
    height: 100%;
  }
  .tag-box {
    height: 100%;
    display: flex;
    align-items: center;
    .render-tags {
      margin-left: 5px;
    }
  }
}
</style>
