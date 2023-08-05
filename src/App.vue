<template>
  <div class="app">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

console.log(router);
</script>

<style scoped lang="scss">
.app {
  height: 100%;
  background: #a67070;
}
</style>
