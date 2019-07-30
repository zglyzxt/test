import axios from 'axios'
import {Toast } from 'mint-ui';
axios.defaults.baseURL = '/api';
let f;

//响应拦截器
// axios.interceptors.request.use(config=>{
//   let url=config.url;
//   if(url==="/home"||url==="/product"){
//       let token=sessionStorage.token;
//       console.log('1111token:',token);
//       if(token){
//           config.headers.token=token;
//           return config;
//       }else{
//           Toast({
//               message:"请先登录",
//               position:"bottom",
//               duration:1000
//           });
//           setTimeout(()=>{
//               location.href="/#/login"
//           },1100);
//           return;
//       }
//   }else{     
//       return config;
//   }
// },err=>{
//   return Promise.reject(err)
// })

//响应拦截器
axios.interceptors.response.use(function (config) {
  return config
}, function (error) {
  // 出错做什么
  return Promise.reject(error)
})


export default axios
