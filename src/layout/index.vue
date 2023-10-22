<template>
  <div class="layout">
    <Sidebar class="sidebar__container" />
    <div class="layout__container">
      <div class="layout__header">
        <Navbar />
        <TagsView />
      </div>
      <router-view />
      <RightPanel><Settings /></RightPanel>
    </div>
  </div>
</template>

<script setup lang="ts">
import RightPanel from "@/components/RightPanel/index.vue";
import Sidebar from "./components/Sidebar/index.vue";
import Navbar from "./components/Navbar.vue";
import TagsView from "./components/TagsView/index.vue";
import Settings from "./components/Settings/index.vue";
</script>

<style scoped lang="scss">
.layout {
  height: 100%;
  background-color: #4c73ae;
  display: flex;
}
</style>
