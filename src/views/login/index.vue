<template>
	<div id="login-container">
		<video id="background-video" autoplay loop muted>
			<source src="./bg-video.mp4" type="video/mp4" />
		</video>

		<div id="login-form">
			<form action="">
				<div class="title-container">
					<h3 class="title">系统登录</h3>
				</div>

				<div class="input-field">
					<input type="text" placeholder="请输入用户名" required autocomplete="on" />
				</div>

				<div class="input-field">
					<input type="password" placeholder="请输入密码" required autocomplete="on" />
				</div>

				<div class="checkbox-container">
					<div class="checkbox-conent">
						<input type="checkbox" />
						<label for="logCheck">记住我</label>
					</div>

					<a href="#" class="forgot-password">忘记密码</a>
				</div>

				<div class="input-field button">
					<button type="submit" @click="clickLogin">登录</button>
				</div>

				<div class="icons-container">
					<p>Or Sign Up Using</p>
					<div>
						<i class="fa-brands fa-facebook"></i>
						<i class="fa-brands fa-twitter"></i>
						<i class="fa-brands fa-google"></i>
					</div>
				</div>

				<div class="singup-container">
					<p>没有账号？ <a href="#">注册</a></p>
				</div>
			</form>
		</div>
	</div>
</template>

<script lang="ts" setup>
// backgroundVideo.playbackRate = 1.5;
import { login } from "@/api/user";

const router = useRouter();

login("admin", "123456").then((res) => {
	console.log(res.data);
});

function toPage(name: string, id: string) {
	router.push({
		name,
		params: {
			id
		}
	});
}

function clickLogin() {
	console.log("clickLogin");
	toPage("Charts", "NiderHoger");
}
</script>

<style scoped lang="scss">
#login-container {
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	#background-video {
		position: fixed;
		right: 0;
		bottom: 0;
		min-width: 100%;
		min-height: 100%;
		height: auto;
		width: auto;
		z-index: -11;

		source {
			min-width: 100%;
			min-height: 100%;
			height: auto;
			width: auto;
		}
	}

	#login-form {
		// display: flex;
		// justify-content: center;
		// align-items: center;

		form {
			// display: flex;
			// flex-direction: column;
			transform: scale(1.1);
			border: 3px solid rgb(255, 255, 255);
			border-radius: 20px;
			padding: 15px 50px;
			.title-container {
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
	}
}
</style>
