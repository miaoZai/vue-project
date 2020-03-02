export default{
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
}