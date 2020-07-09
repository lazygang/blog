import {request} from './request'

export function getHomeNews(index) {
  return request({
    url:'news/top',
    params:{
          page:index
       }
  });
}
export function getHomeShehui() {
  return request({
    url:'news/shehui'
  });
}
export function getHomeGuonei() {
  return request({
    url:'news/guonei'
  });
}
export function getHomeGuoji() {
  return request({
    url:'news/guoji'
  });
}
export function getHomeYule() {
  return request({
    url:'news/yule'
  });
}








// export function getGoodsData(type, page) {
//   return request({
//     url:'/home/data',
//     params:{
//       type,
//       page
//     }
//   });
// }

// export function getDetail(type, page) {
//   return request({
//     url:'/home/data',
//     params:{
//       type,
//       page
//     }
//   });
// }