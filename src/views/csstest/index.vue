<template>
	<div class="container">
		<div class="left">
			<button @click="goResume">Super Centered</button>
			<button @click="goPancake">The Deconstructed Pancake</button>
			<button @click="goResume">居中</button>
			<button @click="goResume">居中</button>
			<button @click="goResume">居中</button>
		</div>
		<div class="right">
			<router-view></router-view>
		</div>
	</div>
</template>

<script setup lang="ts">
const router = useRouter();

function toPage(name: any) {
	router.push({
		name,
	});
}

const goResume = () => {
	toPage("SuperCentered");
};

const goPancake = () => {
	toPage("DeconstructedPancake");
};
</script>

<style scoped lang="scss">
.container {
	height: 100vh;
	width: 100vw;
	display: flex;
	background: rgb(208, 208, 208);
	color: black;
}

.left {
	min-width: 200px;
	width: 300px;
	background-color: rgb(82, 46, 46);
	flex-direction: column;
	padding: 10px 0 0 10px;

	button {
		background-color: rgb(208, 208, 208);
		width: 80%;
		margin: 10px;
		height: 40px;
		border: none;
		border-radius: 70px;
		cursor: pointer;
	}
}

.right {
	flex: 1;
	overflow: hidden;
}
</style>
