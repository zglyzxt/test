<template>
  <div class="user-box">  
    <!-- user头部  -->
    <header class="user-head">
      <div class="head-left"><i class="iconfont icon-left" @click="goBack">&lt;</i></div>
      <div class="head-text"><span>个人中心</span></div>
    </header>
    <!-- 头像 -->
    <section class="user-page">
      <div class="user-info">
        <div class="info">
            <div class="login-img">
              <img src="http://img001.mllres.com/zximages/data/avatar/1366071430350652237.jpg" class="info-img"/>
            </div>
            <div  class="login-name">
                <!-- <span class="user-name">{{userInfo.username}}</span> -->
                <p class="info-name">
                  {{userInfo}}
                </p>
            </div>
            <span class="login-right">&gt;</span>
        </div>
      </div>
      <div class="marginten"></div>
      <!-- menu -->
      <div class="user-menu">
        <!-- menulist -->
        <div class="menu-list clearfix list-one">
            <span class="menu-header"></span>
            <p class="menu-title">我的订单</p>
            <i class="menu-right">&gt;</i>
        </div>
        <!-- menu-content -->
        <div class="menu">
          <router-link tag="div" to="" class="menu-item">
              <i class="iconfont">&#xe612;</i>
              <span>待付款</span>
          </router-link>
          <router-link tag="div" to="" class="menu-item">
              <i class="iconfont">&#xe616;</i>
              <span>待发货</span>
          </router-link>
          <router-link tag="div" to="" class="menu-item">
              <i class="iconfont">&#xe61d;</i>
              <span>待收货</span>
          </router-link>
          <router-link tag="div" to="" class="menu-item">
              <i class="iconfont">&#xe60b;</i>
              <span>待评价</span>
          </router-link>
          <router-link tag="div" to="" class="menu-item">
              <i class="iconfont">&#xe60b;</i>
              <span>全部订单</span>
          </router-link>
        </div>       
      </div>
      <div class="marginten"></div>
      <!-- item -->
      <div class="user-content">
        <div class="mid-item">
          <router-link tag="div" to="/shopcart" class="menu-list clearfix list-two">
              <i class="menu-header"></i>
              <p class="menu-title">我的购物车</p>
              <span class="iconfont menu-right">&#xe79a;</span>
          </router-link>
          <router-link tag="div" to="/love" class="menu-list clearfix list-three">
              <i class="menu-header"></i>
              <p class="menu-title">我的收藏</p>
              <span class="iconfont menu-right">&#xe79a;</span>
          </router-link>
          <router-link tag="div" to="" class="menu-list clearfix list-four">
              <i class="menu-header"></i>
              <p class="menu-title">我的地址</p>
              <span class="iconfont menu-right">&#xe79a;</span>
          </router-link>
          <router-link tag="div" to="" class="menu-list clearfix list-five">
              <i class="menu-header"></i>
              <p class="menu-title">我的最近浏览</p>
              <span class="iconfont menu-right">&#xe79a;</span>
          </router-link>
          <router-link tag="div" to="" class="menu-list clearfix list-seven">
              <i class="menu-header"></i>
              <p class="menu-title">意见反馈</p>
              <span class="iconfont menu-right">&#xe79a;</span>
          </router-link>
          <div class="marginten"></div>
          <router-link tag="div" to="" class="menu-list clearfix list-eight">
              <i class="menu-header"></i>
              <p class="menu-title">账户安全</p>
              <span class="iconfont menu-right">&#xe79a;</span>
          </router-link>
        </div>
      </div>
    </section>
  
  <Nav></Nav>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Nav from '../nav/nav'
export default {
  name: 'home',
  data () {
    return {
      
    }
  },
  computed:{
    ...mapState(['userInfo'])
  },
  methods:{
    goBack() {
        this.$router.go(-1)
      }
  },
  components:{
    Nav
  }
}
</script>


<style scoped>
@font-face {
  font-family: 'iconfont';  /* project id 1306245 */
  src: url('//at.alicdn.com/t/font_1306245_efrzbqtt7vh.eot');
  src: url('//at.alicdn.com/t/font_1306245_efrzbqtt7vh.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1306245_efrzbqtt7vh.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1306245_efrzbqtt7vh.woff') format('woff'),
  url('//at.alicdn.com/t/font_1306245_efrzbqtt7vh.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1306245_efrzbqtt7vh.svg#iconfont') format('svg');
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}
.user-box{
  /* height:calc(100% - 50px -50px - 40px) */
  margin-bottom: 70px;
}
.user-head{
  height: 44px;
  border-bottom: solid 1px #d8d8d8;
  background: #fff;
  position: relative;
  border-width: 0 0 1px;
}
.head-left{
  position: absolute;
  height: 100%;
  line-height: 44px;
  padding: 0 10px;
}
.head-text {
  width: 100%;
  text-align: center;
  font-weight: 800;
  line-height: 44px;
}
.user-info {
  width: 100%;
  background-image: url(http://img.jianjuke.cn/siteinfo/2018/04/13/7109F3AA-6621-C5B9-AE30-1CBF374DE069.gif);
  background-size: cover;
  position: relative;
  height: 150px;
}
.info{
  width: 100%;
  display: inline-block;
  position: absolute;
  top: 50%;
  margin-top: -33px;
}
.login-img{
  float: left;
}
.login-name{
    margin-left: 12px;
    color: #fff;
}
.login-right{
    display: block;
    width: 8px;
    height: 13px;
    position: absolute;
    top: 50%;
    right: 15px; 
    margin-top: -7px;
    color: white;
}
.info-img{
  width: 66px;
  margin-left: 10px;
  padding: 3px;
  background-color: rgba(255,255,255,.1);
  border-radius: 50%;
}
.info-name{
    font-size: 16px;
    height: 14px;
    line-height: 14px;
    margin: 24px 10px 8px;
}
.menu-item{
  display: flex;
  flex-direction: column;
  text-align: center;
}
.menu-item>i{
   font-size: 25px;
   color: gray;
}
.marginten {
    width: 100%;
    height: 10px;
    background-color: #f4f4f4;
    position: relative;
}
.user-menu{
  width: 100%;
  background: #fff;
  position: relative;
}

.user-menu{
    width: 100%;
    background: #fff;
    position: relative;
}
.menu-list{
    height: 50px;
    margin-left: 10px;
    line-height: 15px;
    position: relative;
}
.clearfix::after{
  content: "";
  display: block;
  height: 0;
  visibility: hidden;
  clear: both;
}
.menu-header{
  float: left;
  display: inline-block;
  width: 25px;
  height: 25px;
  margin: 10px 1px;
}
.menu-list .menu-header{
  background-image: url(http://img.jianjuke.cn/siteinfo/2018/04/13/D62AEC70-AA12-8E69-6648-C1E2CAB23E20.png);
  background-size: 150px 150px;
  background-repeat: no-repeat;
}
.list-one>span{
  background-position: 0 -19px;
}
.list-two>i{
  background-position: -50px -19px;
}
.list-three>i{
  background-position: -50px -19px;
}
.list-four>i{
  background-position: -50px -19px;
}
.list-five>i{
  background-position: -50px -19px;
}
.list-six>i{
  background-position: -50px -19px;
}
.list-seven>i{
  background-position: -75px -19px;
}
.list-eight>i{
  background-position: 0px -44px;
}
.menu-title{
    float: left;
    color: #333;
    font-size: 16px;
    margin-left: 9px;   
}
.menu-right{
    position: absolute;
    top: 50%;
    right: 15px;
    display: block;
    width: 8px;
    height: 13px;
    background-position: -142px -13px;
    margin-top: -7px;
}
.menu{
  padding: 10px 15px;
  display: flex;
}
.menu>div{
  flex: 1;
}

.user-content{
    width: 100%;
    background: #fff;
    position: relative;
}

</style>
