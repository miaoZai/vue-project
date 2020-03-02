// 对request进一步封装，这是首页模块的网络请求，首页面向home.js开发
import { request } from './request'

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}
//获取所有商品
export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: { type: type, page: page }
  })
}
