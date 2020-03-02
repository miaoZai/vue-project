import Vuex from 'vuex'
import Vue from 'vue'
import {INCREMENT}from './mutaions.type'
//1 安装插件
Vue.use(Vuex);
const moduleA={
  state:{
    name:'zhangsan',
  },
  mutations:{
    updateName(state, payload){
      state.name=payload;
    }
  },
  getters:{ 
    fullname(state){
    return state.name;
  },
    fullnames(state,getters,rootstate){
      return getters.fullname+rootstate.count;
    }
  },
  actions:{
    aUpdaateName(context){
      context.commit('updateName','王五');
    },
  }

};
 //2 创建对象
 const store=new Vuex.Store({
  state:{
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
  },
  mutations:{
    //定义方法
    [INCREMENT](state){
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    
    incrementCount(state,payload){
      console.log(payload);
      state.count+=payload.count;
    },
    addStudent(state,payload){
      state.students.push(payload);
   },
   updateInfo(state){
    state.info.name="改过了";
   }
    },
  actions:{
    aUpdateInfo(context,payload){
      // setTimeout(()=>{
      //   context.commit('updateInfo');
      //   console.log(payload.message);
      // },1000);
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          context.commit('updateInfo');
          console.log(payload.message);
          resolve(111);
          reject();
        },1000)
      });
    }
  },
  getters:{
    powerCount(state){  
      return state.count+20;
    },
    more20(state){
      return state.students.filter(s=>s.age>=50);
    },
    // 这个函数还可以有另外一个参数getters表示获取getters中其他状态
    more20stuLength(state,getters){
      return getters.more20.length;
    },
    //获取年龄大于age（age是参数）给别人返回的是一个函数
    moreAgestuLength(state){
      return function(age){
        return state.students.filter(s=>s.age>=age).length;
      }
    },
  
  },
  modules:{
    a:moduleA,
    
  },
 });
 //3 导出store对象
 export default store