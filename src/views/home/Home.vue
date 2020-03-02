<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      :titles="titles"
      @tabClick="tabClick"
      class="tab-control"
      ref="tabControl1"
      v-show="isTabFixed"
    ></tab-control>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @pullingUp="loadMore"
      @scroll="contentScroll"
    >
      <home-swiper
        :banners="banners"
        @swiperLoad="swiperImageLoad()"
        ref="swiper"
      />
      <recommend-view :recommends="recommends"></recommend-view>
      <feature></feature>
      <tab-control
        :titles="titles"
        @tabClick="tabClick"
        ref="tabControl2"
      ></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backTop()" v-show="isShowBackTop" />
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/common/backTop/BackTop'

import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import Feature from './childComps/Feature'

import { getHomeMultidata, getHomeGoods } from 'network/home'

export default {
  name: 'Home',
  data() {
    return {
      banners: null,
      recommends: null,
      titles: ['流行', '新款', '精选'],
      // key value 为模型的数据模型
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: 'pop',
      isShowBackTop: false,
      tabControlOffsetTop: 0,
      isTabFixed: false
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    Feature,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  created() {
    //函数调用->压入函数栈（保存函数调用过程中的所有变量）
    // 函数调用结束->弹出函数栈（释放函数中所有的变量）
    // 请求轮播图数据
    this.getHomeMultidata()
    // 请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted() {
    // 监听item中图片加载完成
    const refresh = this.debounce(this.$refs.scroll.scroll.refresh, 500)
    this.$bus.$on('itemImageLoad', () => {
      refresh()
    })
    // 获取tabControl的offsetTop
    // 所有组件都有一个属性$el,用于获取组件中元素
    //
  },
  computed: {
    showGoods() {
      // console.log(2)
      return this.goods[this.currentType].list
    }
  },
  methods: {
    /* 事件监听相关的方法 */
    debounce(func, delay) {
      let timer = null
      return function(...arg) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
          func.apply(this, arg)
        }, delay)
      }
    },
    tabClick(index) {
      console.log(index)
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    },
    backTop() {
      console.log('这个组件被点击')
      this.$refs.scroll.scroll.scrollTo(0, 0, 500)
    },
    contentScroll(position) {
      if (-position.y > 1000) {
        this.isShowBackTop = true
      } else {
        this.isShowBackTop = false
      }
      //2.决定topcontrol是否吸顶(position:fixed)
      this.isTabFixed = -position.y > this.tabControlOffsetTop
    },
    swiperImageLoad() {
      // 这里获取正确的offsetTop
      this.tabControlOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },
    /* 网络请求的方法 */
    getHomeMultidata() {
      getHomeMultidata()
        .then(res => {
          this.banners = res.data.banner.list
          // console.log(this.banners)
          this.recommends = res.data.recommend.list
        })
        .catch(err => {
          alert(err)
        })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        // console.log(res.data)
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        // 上拉一次加载结束了
        this.$refs.scroll.finishPullUp()
      })
    },
    // 上拉加载更多
    loadMore() {
      console.log('加载更多')
      this.getHomeGoods(this.currentType)
      /* 修复bug 这个插件在上拉加载的时候由于图片是异步加载，item当时计算出来的高度很小，
      等图片过来的时候item撑起来了，可滚动的区域增大，但是那个时候它用的那个高度是很小的，它
      后来计算出来了，最终增大，它不会重新计算的，直接刷新scroll
       */
    }
  },
  beforeDestroy() {}
}
</script>

<style scoped>
#home {
  /*padding-top: 44px;*/
  height: 100vh;
  position: relative;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  /*position: fixed;*/
  /*top: 0;*/
  /*right: 0;*/
  /*left: 0;*/
  /*z-index: 1;*/
}

.content {
  /*height: calc(100% - 93px);*/
  /*margin-top: 44px;*/
  overflow: hidden;

  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

.tab-control {
  position: relative;
  z-index: 9;
}
</style>
