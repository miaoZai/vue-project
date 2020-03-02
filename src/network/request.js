import axios from "axios";
export function request(config) {
  // 1 创建axios实例
  const instance = axios.create({
    // baseURL: "http://123.207.32.32:8000",
    baseURL:"http://123.207.32.32:8000/api/wh",
    timeout: 5000
  });
  //axios拦截器
  //实例的请求拦截（成功和失败）拦截了要把config返回去
  instance.interceptors.request.use(
    config => {
      // console.log(config);
      return config;
      // 1要写那些业务呢：比如说config的一些信息不符合服务器的要求
      // 2比如说每次发送网络请求的时候，都希望在界面中显示一个请求的图标
      // show()
      //3 某些网络请求（比如登陆（token））必须携带一些特殊的信息，他没有登陆就无权访问，让他跳转到登陆界面
    },
    err => {
      console.log(err);
    }
  );
  //实例的响应拦截（成功和失败）
  instance.interceptors.response.use(
    res => {
      // console.log(res);
      // 你拦截了要返回回去
      return res.data;
      // 成功后消失dismiss()
    },
    err => {
      console.log(err);
    }
  );
  return instance(config);
}
