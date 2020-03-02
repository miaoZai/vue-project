import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import * as api from './network/request.js'
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')

//axios全局配置
// axios.defaults.baseURL = "http://123.207.32.32:8000";
// axios.defaults.timeout = 5000;
// 常见的配置选项
// 请求前的数据处理 transformRequest(function(data){});
// 请求后的数据处理 transformRespose(function(data){});
//method :'get' url查询对象 params:{id:12}
//method :'post' url查询对象 data:{id:12}
// axios发送并发请求
// axios
//   .all([
//     axios({
//       url: "/home/multidata"
//     }),
//     axios({
//       url: "/home/data",
//       params: {
//         type: "sell",
//         page: 5
//       }
//     })
//   ])
//   .then(res => {
//     console.log(res);
//   });

// 创建对应的axios的实例
// const instance1 = axios.create({
//   baseURL: "http://123.207.32.32:8000",
//   timeout: 5000
// });
// instance1({
//   url: "home/data"
// }).thne(res => {
//   console.log(res);
// });
// const instance2 = axios.create({
//   baseURL: "http://123.207.32.32:8000",
//   timeout: 5000,
//   headers: {}
// });
api.request({ url: 'home/multidata' }).then(
  res => {
    // console.log(res);
  },
  err => {
    // console.log(err);
  }
)
