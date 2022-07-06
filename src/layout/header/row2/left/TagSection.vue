<template>
  <el-scrollbar ref="scrollbarRef">
    <div class="tag-box" ref="tagBoxRef">
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
import { watch, onBeforeUnmount, ref, nextTick } from "vue";
import { useRoute, useRouter } from "vue-router";

import { TagType } from "@/types/tagBox";
import { useTagBoxStore } from "@/store/tagBox";
import { ElScrollbar } from "element-plus";

const tagBoxRef = ref();

const tagBoxStore = useTagBoxStore();

const router = useRouter();
const route = useRoute();

const scrollbarRef = ref<InstanceType<typeof ElScrollbar>>();

// 如果第一次加载的时候不是/dashboard页面，需要添加到tagList
if (route.path !== "/dashboard") {
  tagBoxStore.addTag({
    name: route.meta.title as string,
    path: route.path,
  });
}

// const scroll = ({ scrollLeft }) => {
//   console.log(`scrollLeft:${scrollLeft}`);
// };

function getMoveLength() {
  const lastEl = tagBoxRef.value.children[tagBoxRef.value.children.length - 1];
  const elOffsetLeft = lastEl.offsetLeft;
  const elWidth = window.getComputedStyle(lastEl).width;
  const elParentWidth = window.getComputedStyle(tagBoxRef.value).width;

  return parseFloat(elWidth) - (parseFloat(elParentWidth) - elOffsetLeft);
  // console.log("offsetLeft: ", lastEl.offsetLeft);
  // console.log('width: ',lastEl.getBoundingClientRect().width) //返回0

  // console.log(window.getComputedStyle(tagBoxRef.value).width);
  // console.log("width: ", window.getComputedStyle(lastEl).width);
}
watch(router.currentRoute, () => {
  const isAddNewTag = tagBoxStore.addTag({
    name: route.meta.title as string,
    path: route.path,
  });
  if (isAddNewTag) {
    nextTick(() => {
      const _length = getMoveLength();
      if (_length > 0) {
        // console.log("move scroll");
        // console.log(_length);
        // BUG: 添加新tag超出容器，移动滚动条不会自动出现，或滚动不准确，可能是element-plus的问题
        scrollbarRef.value!.setScrollLeft(_length);
      }
    });
  }
});

const closeTag = (tag: TagType, index: number) => {
  if (route.path === tag.path) {
    // 如果关闭的时当前路径的标签，关闭后跳转到前一个标签
    const tagList = tagBoxStore.tagList;
    // 判断tagList是否只剩下一个
    if (index === 0) {
      router.push("/dashboard");
    } else {
      router.push(tagList[index - 1].path);
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
  width: 100%;
  margin-left: 8px;
  :deep(.el-scrollbar__view) {
    height: 100%;
  }
  :deep(.el-scrollbar__thumb) {
    // 把滚动条的位置下移2px，滚动条的父容器似乎设置了overflow:hidden,再往下移就要看不到了
    margin-top: 2px;
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
