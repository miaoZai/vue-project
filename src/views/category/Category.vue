<template>
  <div class="wrapper" ref="aaa">
    <ul class="content">
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
      <li>women</li>
    </ul>
  </div>
</template>

<script>
import BS from 'better-scroll'
export default {
  name: 'Category',
  data() {
    return {
      scroll
    }
  },
  created() {},
  mounted() {
    this.scroll = new BS(document.querySelector('.content'), {
      probeType: 3,
      pullUpLoad: true
    })
    this.scroll.on('pullingUp', () => {
      console.log('上拉加载更多')
    })
  },
  methods: {
    name() {}
  }
}
</script>

<style>
.wrapper {
  height: 150px;
}
.wrapper .content {
  height: 200px;
  background: red;
}
</style>
