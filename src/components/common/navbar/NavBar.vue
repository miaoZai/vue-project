<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style>
.nav-bar {
  display: flex;
  /* 一般导航44px */
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-sizing: 0 1px 1px rgba(100, 100, 100, 0.1);
  color:#fff;
}
.left,
.right {
  width: 60px;
}
.center {
  flex: 1;
}
</style>
