<template>
  <div class="layout">
    <Sidebar class="sidebar__container" />
    <div class="layout__container">
      <div class="layout__header">HEADER</div>
      <router-view />
      <aside>Right</aside>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "@/layout/components/Sidebar/index.vue";
</script>

<style scoped lang="scss">
.layout {
  height: 100%;
  background-color: #4c73ae;
  display: flex;
}
</style>
