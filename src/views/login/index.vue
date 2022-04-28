<template>
  <div class="container">
    <div class="form">
      <LoginFormVue />
    </div>
  </div>
</template>

<script setup lang="ts">
import LoginFormVue from "./LoginForm.vue";
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  position: relative;
  .form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    padding: 20px 16px;
    box-shadow: 0 0 5px rgba(0.2, 0.2, 0.2, 0.1);
  }
}
</style>
