<template>
  <div class="app">app</div>
</template>

<script setup lang="ts">
import { login } from "./api/user.ts";

login({ username: "first", password: 123 }).then((res) => {
  console.log(res);
});
</script>

<style scoped lang="scss">
.app {
  height: 100%;
  background: #a67070;
}
</style>
