// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"

import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

import './assets/icons/iconfont.css'
import './assets/normalize.css'


import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant)


import myAxios from './service/ajax'
Vue.prototype.axios = myAxios

Vue.use(Mint)
Vue.config.productionTip = false


//路由全局前置守卫
import { Toast } from 'mint-ui';
router.beforeEach((to,from,next)=>{
  if(to.meta.isLogin){
    if(sessionStorage.token){
      next();
    }else{
      Toast({
        message: '请先登录',
        position: 'bottom',
        duration: 1000
      });
      setTimeout(()=>{
        next('/login');
      },1100)
    }
  }else{
    next();
  }
})




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
