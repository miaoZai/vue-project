export default{
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
}