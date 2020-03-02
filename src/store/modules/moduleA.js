export default{
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
}