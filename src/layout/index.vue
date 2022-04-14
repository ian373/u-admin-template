<template>
  <div class="layout-box">
    <el-container>
      <el-aside>Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ElContainer } from "element-plus";
</script>

<style scoped lang="scss">
.layout-box {
  width: 100%;
  height: 100%;
  .el-container {
    .el-aside {
      width: 190px;
      // height: 100%;
      background-color: lightblue;
    }
    .el-container {
      // height: 100%;
      // width: calc(100% - 190px);
      .el-header {
        // height: 45px;
        background-color: lightpink;
      }
      .el-main {
        background-color: lightgray;
      }
    }
  }
}
</style>
