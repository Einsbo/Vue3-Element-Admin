<template>
	<div class="content">
		<div class="left">
			<h2>孟 宝 鑫</h2>
			<div>
				<h5>基本信息</h5>
				<hr />
				<ul>
					<li><i class="fa fa-envelope"></i>m1090534507@qq.com</li>
					<li><i class="fa fa-phone"></i>18753168203</li>
					<li>1</li>
					<li>1</li>
					<li>1</li>
					<li>1</li>
				</ul>
			</div>
			<div>
				<h5>基本信息</h5>
				<hr />
				<ul>
					<li><i class="fa fa-envelope"></i>m1090534507@qq.com</li>
					<li><i class="fa fa-phone"></i>18753168203</li>
					<li>1</li>
					<li>1</li>
					<li>1</li>
					<li>1</li>
				</ul>
			</div>
			<div>
				<h5>基本信息</h5>
				<hr />
				<ul>
					<li><i class="fa fa-envelope"></i>m1090534507@qq.com</li>
					<li><i class="fa fa-phone"></i>18753168203</li>
					<li>1</li>
					<li>1</li>
					<li>1</li>
					<li>1</li>
				</ul>
			</div>
		</div>
		<div class="right">
			RIGHT
			<router-link to="/">Back To Home</router-link>
		</div>
	</div>
</template>

<style scoped lang="scss">
.content {
	display: flex;
	height: 100vh;
	width: 100vw;
	overflow: hidden;
	background-color: #fff;
	color: black;
	// padding: 20px;
}

hr {
	height: 3px;
	background-color: black;
	border: none;
}

.left {
	padding: 20px;
	max-width: 400px;
	width: 30vw;
	display: flex;
	flex-direction: column;
	background-color: rgb(199, 199, 199);
	line-height: 20px;

	h2 {
		text-align: center;
		font-size: 3.2rem;
		line-height: 3.2rem;
		font-weight: 600;
		margin-bottom: 20px;
	}

	h5 {
		margin: 10px 0;
		font-weight: 600;
	}

	ul {
		li {
			margin: 5px 0;

			i {
				margin-right: 10px;
			}
		}
	}
}

.right {
	flex: 1;
	display: flex;
	flex-direction: column;
}
</style>
