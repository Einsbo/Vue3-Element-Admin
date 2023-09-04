<template>
  <div class="sidebarIcon" ref="sidebarIcon">
    <!-- <el-icon><Lock /></el-icon> -->
    <!-- {{ icon }} -->
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
});

const sidebarIcon = document.querySelector(".sidebarIcon");

sidebarIcon.innerHTML = `<el-icon><Lock /></el-icon>`;

// onMounted(() => {
//   sidebarIcon.value.innerHTML = props.icon;
//   console.log(sidebarIcon.value);
// });
// console.log(sidebarIcon.value);
</script>
