<template>
  <div class="sidebarItem" v-for="item in sidebarItems">
    <el-sub-menu :index="item.path" v-if="item.children">
      <template #title>
        <el-icon><location /></el-icon>
        <span>{{ item.name }}</span>
      </template>
      <SidebarItem :sidebarItems="item.children" />
    </el-sub-menu>

    <el-menu-item :index="item.path" v-else>
      <!-- <el-icon><setting /></el-icon> -->
      <!-- <el-icon><Lock /></el-icon> -->
      <Icon :icon="icon" />
      <span>{{ item.name }}</span>
    </el-menu-item>
  </div>
</template>

<script setup lang="ts">
import Icon from "./Icon.vue";

const icon = "<el-icon><Lock /></el-icon>";

interface RouteItem {
  path: string;
  name: string;
  children?: RouteItem[];
}

const props = defineProps({
  sidebarItems: {
    type: Array as PropType<RouteItem[]>,
    required: true,
  },
});

console.log(props.sidebarItems);
</script>
