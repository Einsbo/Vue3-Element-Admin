<template>
  <div id="login-container">
    <video ref="backgroundVideo" id="background-video" autoplay loop muted>
      <source src="./bg-video.mp4" type="video/mp4" />
    </video>

    <div id="login-form">
      <form action="">
        <div class="title-container">
          <h3 class="title">系统登录</h3>
        </div>

        <div class="input-field">
          <input type="text" placeholder="请输入用户名" required />
        </div>

        <div class="input-field">
          <input type="password" placeholder="请输入密码" required />
        </div>

        <div class="checkbox-container">
          <div class="checkbox-conent">
            <input type="checkbox" />
            <label for="logCheck">记住我</label>
          </div>

          <a href="#" class="forgot-password">忘记密码</a>
        </div>

        <div class="input-field button">
          <button type="submit">登录</button>
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
const backgroundVideo = ref<HTMLVideoElement | null>(null);

onMounted(() => {
  backgroundVideo.value.playbackRate = 0.2;
  console.log(backgroundVideo.value.playbackRate);
});
// backgroundVideo.playbackRate = 1.5;
</script>

<style scoped lang="scss">
video {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  height: auto;
  width: auto;
  filter: blur(15px);
  -webkit-filter: grayscale(50%);
  // filter: grayscale(50%);
  z-index: -11;

  source {
    min-width: 100%;
    min-height: 100%;
    height: auto;
    width: auto;
  }
}
</style>
