<template>
  <div class="tab-bar">
    <slot></slot>
     
  </div>
</template>

<script>
export default {
  name: "TabBar"
};
</script>

<style>
.tab-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 49px;
  background: #f6f6f6;
  box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.1);
  padding: 0 15px;
}
</style>
