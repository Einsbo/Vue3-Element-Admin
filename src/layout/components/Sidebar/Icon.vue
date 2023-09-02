<template>
  <div class="sidebarIcon" ref="sidebarIcon">
    {{ icon }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
});

const sidebarIcon = ref<HTMLElement | null>();
console.log(sidebarIcon.value);
</script>
