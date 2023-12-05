import type { wrap } from 'module';
<template>
	<div class="container">
		<h2>解构煎饼布局</h2>
		<div class="father">
			<div class="children">1</div>
			<div class="children">2</div>
			<div class="children">3</div>
		</div>
	</div>
</template>

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
		min-height: 150px;
		width: 50%;
		background: rgb(57, 124, 111);
	}
}

.father {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	.children {
		flex: 1 1 150px; // Stretching
		flex: 0 1 150px; // NO Stretching
		margin: 10px;
	}
}
</style>
