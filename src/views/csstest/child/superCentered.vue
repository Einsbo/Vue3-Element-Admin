<template>
	<div class="container">
		<h2>超级居中</h2>
		<div class="father">
			<div class="children">Children</div>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.container {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;

	h2 {
		margin: 50px;
	}
}

.father {
	margin: 20px;
	height: 500px;
	width: 400px;
	background: rgb(150, 79, 79);
	resize: both;
	overflow: hidden;

	.children {
		height: 50%;
		width: 50%;
		background: rgb(57, 124, 111);
	}
}

.father {
	display: flex;
	justify-content: center;
	align-items: center;

	.children {
	}
}
</style>
