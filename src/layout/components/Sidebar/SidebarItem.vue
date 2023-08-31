<template>
  <div class="sidebarItem" v-for="(item, index) in sidebarItems">
    <el-sub-menu :index="item.path" v-if="item.children">
      <template #title>
        <el-icon><location /></el-icon>
        <span>{{ item.name }}</span>
      </template>
      <SidebarItem :sidebarItems="item.children" />
    </el-sub-menu>

    <el-menu-item :index="item.path" v-else>
      <el-icon><setting /></el-icon>
      <span>{{ item.name }}</span>
    </el-menu-item>
  </div>
</template>

<script setup>
defineProps({
  sidebarItems: {
    type: Array,
    required: true,
  },
});
</script>
