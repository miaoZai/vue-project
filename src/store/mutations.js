import {INCREMENT}from './mutaions.type'
export default {
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
}