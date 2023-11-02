<template>
	<div>
		Charts
		{{ id }}
		<button @click="click1">go to children1</button>
		<button @click="click2">go to children2</button>


		<RouterView />

		<div>
			<RouterLink replace to="/">back to home</RouterLink>
		</div>
	</div>
</template>

<script setup lang="ts">
const router = useRouter();
defineProps({
	id: String
})

function toPage(name: string) {
	router.push({
		name
	})
}

const click1 = () => {
	toPage("Children1")
}

const click2 = () => {
	toPage("Children2")
}

</script>
