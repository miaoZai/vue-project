<template>
  <div>
    <p>我是用户登录界面</p>
    <h2>{{ userId }}</h2>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    userId() {
      return this.$route.params.userId;
    }
  }
};
</script>

<style></style>
