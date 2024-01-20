<template>
	<div>children2</div>
	<div>
		<button :disabled="isButtonDisabled">Button</button>
		<button @click="isButtonDisabled = !isButtonDisabled">Change the disabled</button>
	</div>
</template>

<script setup lang="ts">
let isButtonDisabled = ref(false);
</script>
