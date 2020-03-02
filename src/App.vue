<template>
  <div id="app">
    <router-view />
    <TabBar>
      <TabBarItem path="/home" activeColor="red">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/home_active.svg"
          alt=""
        />
        <div slot="item-text">首页</div>
      </TabBarItem>
      <TabBarItem path="/category" activeColor="red">
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/category_active.svg"
          alt=""
        />
        <div slot="item-text">分类</div>
      </TabBarItem>
      <TabBarItem path="/cart" activeColor="red">
        <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/shopcart_active.svg"
          alt=""
        />
        <div slot="item-text">购物车</div>
      </TabBarItem>
      <TabBarItem path="/profile" activeColor="red">
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/profile_active.svg"
          alt=""
        />
        <div slot="item-text">我的</div>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script>
// import HelloWorld from "~components/HelloWorld.vue";
// import HelloVuex from "components/HelloVuex";
// import { INCREMENT } from "store/mutaions.type";
import TabBar from "components/tabbar/TabBar";
import TabBarItem from "components/tabbar/TabBarItem";
export default {
  name: "App",
  components: {
    // HelloWorld,
    // HelloVuex,
    TabBar,
    TabBarItem
  },
  data() {
    return {
      message: "我是APP组件",
      count: 0,
      userId: "张三"
    };
  },
  computed: {},
  methods: {
    // homeClick() {
    //   this.$router.push("/home");
    // },
    // aboutClick() {
    //   this.$router.push("/about");
    // },
    // profileClick() {
    //   this.$router.push({
    //     path: "/profile",
    //     query: {
    //       name: "mt",
    //       age: 27
    //     }
    //   });
    // },
    // addition() {
    //   this.$store.commit(INCREMENT);
    // },
    // subtraction() {
    //   this.$store.commit("decrement");
    // },
    // addCount(count) {
    //   // 普通的提交风格
    //   // this.$store.commit("increment", count);
    //   //特殊的提交风格
    //   this.$store.commit({
    //     type: "incrementCount",
    //     count: count
    //   });
    // },
    // addStudent() {
    //   const stu = {
    //     id: 1200,
    //     name: "xiaomiao",
    //     age: 76
    //   };
    //   this.$store.commit("addStudent", stu);
    // },
    // updateInfo() {
    //   this.$store.dispatch("aUpdateInfo", "我是携带的信息").then(res => {
    //     console.log(res);
    //   });
    // },
    // updateName() {
    //   this.$store.commit("updateName", "list");
    // }
  }
};
</script>

<style>
@import "assets/css/base.css";
</style>
