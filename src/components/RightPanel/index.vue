<template>
  <div class="rightPanel-container" :class="{ show: show }">
    <div class="rightPanel">
      <div class="handle-button" @click="show = !show">
        <div v-if="!show">
          <el-icon><Setting /> </el-icon>
        </div>
        <div v-else>
          <el-icon><Close /></el-icon>
        </div>
      </div>
      <div class="rightPanel-items">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
let show = ref(false);
</script>

<style scoped lang="scss">
.rightPanel-container {
  .rightPanel {
    width: 100%;
    max-width: 260px;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.05);
    transition: all 0.4s;
    transform: translate(100%);
    background: #fff;
    z-index: 40000;
  }
}

.show {
  transition: all 0.4s cubic-bezier(0.7, 0.3, 0.1, 1);

  .rightPanel {
    transform: translate(0);
  }
}

.handle-button {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: -48px;
  top: 25%;
  border-radius: 6px 0 0 6px !important;
  cursor: pointer;
  background: #cc7f3c;
  color: #fff;
  i {
    font-size: 24px;
  }
}
</style>
