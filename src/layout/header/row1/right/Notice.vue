<template>
  <el-popover :width="240" trigger="click">
    <template #reference>
      <el-badge
        :value="1"
        :max="9"
        class="box"
        type="primary"
        :hidden="hiddenBadge"
        :is-dot="true"
      >
        <svg class="iconfont" aria-hidden="true">
          <use xlink:href="#icon-bell"></use>
        </svg>
      </el-badge>
    </template>
    <el-tabs v-model="activeName">
      <el-tab-pane label="消息(3)" name="message">
        <div class="content-box">
          <div class="item" v-for="x of 3">
            <!-- 如果要显示消息较复杂，可自行设计 div.item -->
            <div class="text">消息{{ x }}</div>
            <span>已读</span>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="通知(0)" name="notice">通知</el-tab-pane>
      <el-tab-pane label="任务(0)" name="task">任务</el-tab-pane>
    </el-tabs>
  </el-popover>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";

const activeName = ref("message") as Ref<"message" | "notice" | "task">;

// 控制是否显示通知图标右上角的小圆点
const hiddenBadge = ref(false);
</script>

<style scoped lang="scss">
@use "../../mixin.scss";

@include mixin.box-style;

.box {
  :deep(.el-badge__content) {
    right: 14px;
    top: 10px;
  }
}
.el-tabs {
  :deep(.el-tabs__nav) {
    display: flex;
    justify-content: space-between;
    width: 100%;
    .el-tabs__item {
      padding: 0;
    }
    .el-tabs__active-bar {
      width: 48px !important;
    }
  }
  // TODO: 需要优化，比如滚动条，定高等等
  .content-box {
    $border-color: #f0f0f0;
    border: 1px solid $border-color;
    padding: 0 10px;
    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 40px;
      border-bottom: 1px solid $border-color;
      &:last-child {
        border-bottom: none;
      }
    }
  }
}
</style>
