import Vuex from 'vuex'
import Vue from 'vue'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import moduleA from './modules/moduleA'
//1 安装插件
Vue.use(Vuex);
const state={
  count:1,
  students:[
    {id:110,name:'小李',age:15},
    {id:111,name:'小李',age:20},
    {id:112,name:'小李',age:122},
    {id:113,name:'小李',age:85},
  ],
  info:{
    name:'xiaomo',
  }
};
 //2 创建对象
 const store=new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules:{
    a:moduleA,
  },
 });
 //3 导出store对象
 export default store