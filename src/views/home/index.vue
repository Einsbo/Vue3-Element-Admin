<template>
	<div class="bgimg-1">
		<h2>MY HOME</h2>
		<div class="buttons">
			<button @click="goResume">个人简历</button>
			<button @click="goVue3">Vue3 Element Admin</button>
			<button @click="goCssTest">CSS Test</button>
		</div>
	</div>
</template>

<script lang="ts" setup>
const router = useRouter();
const goVue3 = () => {
	router.push({
		path: "/login",
	});
};

const goResume = () => {
	router.push({
		path: "resume",
	});
};

const goCssTest = () => {
	router.push({
		path: "csstest",
	});
};
</script>

<style scoped lang="scss">
.bgimg-1 {
	width: 100vw;
	min-height: 100vh;
	background-image: url("./bg1.jpg");
	background-size: cover;
	background-repeat: no-repeat;
}

h2 {
	text-align: center;
	font-weight: 600;
	font-size: 2.2rem;
	padding: 40px;
	color: rgb(62, 62, 62);
}

.buttons {
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	button {
		background-color: rgb(208, 208, 208);
		width: 250px;
		margin: 10px;
		height: 70px;
		border: none;
		border-radius: 70px;
		cursor: pointer;
	}

	button:hover {
		background-color: #c7c7c7;
	}
}
</style>
