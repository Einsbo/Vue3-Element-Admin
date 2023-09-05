<template>
  <div class="sidebarItems" v-for="item in sidebarItems">
    <el-sub-menu :index="item.path" v-if="item.children">
      <template #title>
        <Item :icon="item.icon" :title="item.name" />
      </template>

      <SidebarItem :sidebarItems="item.children" />
    </el-sub-menu>

    <el-menu-item :index="item.path" v-else>
      <Item :icon="item.icon" :title="item.name" />
    </el-menu-item>
  </div>
</template>

<script setup lang="ts">
import Item from "./Item.vue";
interface RouteItem {
  path: string;
  name: string;
  icon?: string;
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
