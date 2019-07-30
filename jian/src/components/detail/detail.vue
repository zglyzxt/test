<template>
  <div class="detail">
    <!-- 商品详情头部  -->
    <header class="user-head">
      <div class="head-left">
        <i class="iconfont icon-left" @click="goBack">&lt;</i>
      </div>
      <div class="head-text">
        <span>商品详情</span>
      </div>
    </header>
    <!-- 轮播图 -->
    <slider :imgUrl="good.slide"></slider>
    <div>{{$store.state.cartList.length}}</div>
    <!-- 信息 -->
    <div class="goods-abstract">
      <div class="padding-box">
        <div class="goods-sell">
          <div>
            <strong class="t1">&yen;</strong><strong class="t2">{{good.count}}</strong>
          </div>
          <div>
              <span>评价 0</span>
          </div>
            <h2>{{good.text}}</h2>
        </div>
      </div>
    </div>
    <!-- 类别数量 -->
    <div class="skus-table">
        <div class="skus-price-holder">
            <dl class="diff">
                <dt>颜色分类</dt>
                <dd>
                    <a class="opt-item opt">{{goodArr6.v}}</a>
                </dd>
            </dl>
           <dl class="diff">
                <dt>门数量</dt>
                <dd>
                    <a class="opt-item opt" v-for="(item,i) in goodArr9.v" :key="i">{{item}}</a>
                </dd>
            </dl>
        </div>
        <!-- 加减 -->
        <!-- <add @getSelectedCount="getSelectedCount"></add> -->
        <div class="number-wrap">
            <div class="number-line">
                <label for="number">购买数量</label>
                <div class="number">
                    <button class="decrease" @click="decrement" >-</button>
                    <input type="number" v-model='SelectedCount' @change="getSelectedCount" ref="numbox">
                    <button class="increase" @click="increment" >+</button>
                </div>
            </div>
        </div>

    </div>
    <!-- footer -->
    <div class="goods-extend">
      <tabControl :titles="['图片详情','规格参数','评价']" class="tab" ref="tabControl"></tabControl>
        <section>
            <div class="content-item">
                <div class="pic">
                  <div v-for="(item,i) in good.pic" :key="i"  class="cimg">
                    <img :src="item" alt=""  class="nimg">
                  </div>
                </div>
            </div>
            <div id="body_guige" class="content-item">
                <ul>
                    <li class="type">规格参数</li>
                    <li class="item" v-for="(item,i) in good.info" :key="i">
                        <div class="key">{{item.k}}</div>
                        <div class="key">{{item.v}}</div>
                    </li>            
                </ul>
            </div>
        </section>
    </div>
    <div class="toolbar">
        <a class="btn-favourite" @click="addLove" >收藏</a>
        <a class="btn-favourite">购物车</a>
        <a class="btn-order" @click="addProduct">加入购物车</a>
        <a class="btn-buynow" @click="toShop">立即购买</a>
    </div>
    
  </div>
</template>

<script>
import tabControl from './tabControl'
import add from "../add/add"
import slider from "../slide/slide"
import axios from 'axios'
import {Toast} from 'mint-ui'
export default {
  name: "detail",
  components: {
    slider,
    add,
    tabControl
  },
  props: {
      
  },
  data() {
    return {
      showFlag: false,
      productCount:0,
      detailid:"",
      good:{},
      goodArr:[],
      goodArr6:[],
      goodArr9:[],
      SelectedCount:1,
      isShowBackTop:false,
      tabOffsetTop:0
    }
  },
  created(){
    this.detailid = this.$route.query.id;
    console.log('id',this.detailid);
    this.getGood();
  },
  mounted(){
    this.tabOffsetTop = this.$refs.tabControl
  },
   methods:{
     decrement(){
        if(this.SelectedCount === 0){
          return
        }
         this.SelectedCount--
      },
      increment(){
        this.SelectedCount++
      },
     addProduct(){
        const product = {};
        product.img = this.good.pic[0];
        product.title = this.good.text;
        product.id = this.good.id;
        product.price = this.good.count;
        product.num = this.SelectedCount;
        this.$store.commit('addToCart',product)
        // this.$store.dispatch('addCart',product)
        // Toast({
        //   position:"middle",
        //   message:"添加成功"
        // })
     },
     addLove(){
        const loves = {};
        loves.img = this.good.pic[0];
        loves.title = this.good.text;
        loves.id = this.good.id;
        loves.price = this.good.count;
        loves.num = this.SelectedCount;
        this.$store.commit('addToLove',loves);

        
     },
    goBack() {
        this.$router.go(-1)
    },
    toShop(){
      this.addProduct();
      this.$router.push('/shopcart')
    },
    getGood(){
      let url = "http://127.0.0.1:85/getFour/"+this.detailid;
      axios.post(url).then(res => {
          this.good = res.data.arr[0];
          this.goodArr = this.good.info;
          console.log("res6:", this.goodArr[6]);
          this.goodArr6 = this.goodArr[6];
          this.goodArr9 = this.goodArr[9];
        }).catch(err => {
          console.log('err',err)
        })
     },
     getSelectedCount(){
       this.SelectedCount = this.$refs.numbox.value
       console.log('123',this.$refs.numbox.value)
     }
  }
};
</script>

<style scoped>
@font-face {
  font-family: "iconfont"; /* project id 1306245 */
  src: url("//at.alicdn.com/t/font_1306245_efrzbqtt7vh.eot");
  src: url("//at.alicdn.com/t/font_1306245_efrzbqtt7vh.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1306245_efrzbqtt7vh.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1306245_efrzbqtt7vh.woff") format("woff"),
    url("//at.alicdn.com/t/font_1306245_efrzbqtt7vh.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1306245_efrzbqtt7vh.svg#iconfont") format("svg");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
.tab{
  position: sticky;
  top: 0px;
}
.user-head {
  height: 44px;
  border-bottom: solid 1px #d8d8d8;
  background: #fff;
  position: relative;
  border-width: 0 0 1px;
}
.head-left {
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

.goods-abstract {
    background: #fff;
    border-bottom: solid 1px #fff;
}
.padding-box{
    padding: .65rem .5rem 0;
}
.goods-sell{
    padding: 20px 0;
    color: #aaa;
    width: 100%;
    position: relative;
}
.goods-sell>div:first-of-type{
    width: 70%;
    position: absolute;
    left: 0;
    text-align: left;
}
.goods-sell>div:last-of-type{
    width: 30%;
    position: absolute;
    right: 0;
    text-align: right;
}
.t1,.t2{
        color: #cf000e;
}
h2{
  font-size: 16px;
  color:black;
  padding: 10px 0;
  line-height: 2;
}
.skus-table {
    padding: 15px;
    display: block;
    background: #fff;
    margin-top: 10px;
}
dl,dt,dd,ul,li{
  margin:0;
  padding: 0;
}
.diff>dt{
    line-height: 28px;
    font-weight: 700;
    margin-bottom: 5px;
}
.skus-table dl dd .opt{
    display: inline-block;
    line-height: 22px;
    padding: 1px 8px;
    margin: 0 6px 6px 0;
    background: #fff;
    position: relative;
    border: 1px solid #bebebe;
    color: #333;
    cursor: pointer;
}

.goods-top{
  width: 100%;
  display: flex;
  height: 40px;
}
.goods-top>div{
  flex: 1;
  text-align: center;
  line-height: 40px;
  background: white;
}
.type,.item{
  list-style:none;
}
#body_guige ul{
    border-top: solid 1px #d8d8d8;
    border-bottom: solid 1px #d8d8d8;
    padding-left: 15px;
    background: #fff;
    margin-top: 10px;
    font-weight: 400;
}
.type{
  padding: 15px 0;
}
.item{
    border-top: solid 1px #d8d8d8;
    padding: 15px 0;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
}
.toolbar{
  height: 45px;
  line-height: 45px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000;
  background: #fff;
  display: flex;
}
.toolbar>a{
  display: block;
  /* flex: 1; */
  text-align: center;
  text-decoration: none;
}
.btn-favourite{
  width: 15%;
    color: #666;
    background: #fff;
    border-top: 1px solid #EFEFEF;
}
.btn-buynow,.btn-order{
  width: 35%;
  color:white;
}
.btn-buynow{
  background: orange;
}
.btn-order{
background: red;
}
.cimg{
  width: 100%;
}
.nimg{
  width: 100%;
}


.number-line{
  padding-bottom: 10px;
    padding-top: 10px;
    line-height: 36px;
}
.number-wrap>label{
  line-height: 28px;
    font-weight: 700;
}
.number-wrap .number {
    height: 36px;
    width: 100px;
    border-radius: 3px;
    float: right;
    color: #999;
    margin-bottom: 33px;
}
.number button{
  float: left;
    outline: 0;
    width: 30px;
    font-size: 24px;
    line-height: 23px;
    height: 34px;
    border: 1px solid #f5f5f5;
    background: #f5f5f5;
}
.number input{
  float: left;
    width: 36px;
    text-align: center;
    font-size: 13px;
    font-weight: 700;
    box-sizing: border-box;
    margin: 0;
    line-height: 34px;
    height: 34px;
    border: 1px solid #f5f5f5;
    background-color: #f5f5f5;
}
</style>
