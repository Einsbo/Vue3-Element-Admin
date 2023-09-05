<template>
  <div class="SidebarItem">
    <el-icon>
      <component :is="icon"></component>
    </el-icon>
    <span class="title">
      {{ title }}
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  icon: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
});
</script>
