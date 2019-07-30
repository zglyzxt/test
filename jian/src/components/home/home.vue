<template>
  <div class="home">
    <!-- 头部搜索 -->
    <topHeader></topHeader>
    <!-- 轮播图 -->
    <Slide :imgUrl="imgUrl"></Slide>
    <!-- 分类 -->
    <div class="category">
      <ul class="itemList">
        <router-link tag="li" class="list-item" to="/category">
          <i class="iconfont icon-fenlei"></i>
          <span>产品分类</span>
        </router-link>
        <router-link tag="li" class="list-item" to="product">
          <i class="iconfont icon-gouwuche"></i>
          <span>产品大全</span>
        </router-link>
        <router-link tag="li" class="list-item" to>
          <i class="iconfont icon-shuqian"></i>
          <span>家装知识</span>
        </router-link>
        <router-link tag="li" class="list-item" to>
          <i class="iconfont icon-yiwen"></i>
          <span>疑问解答</span>
        </router-link>
      </ul>
    </div>
    <!-- hotactivity -->
    <div class="hot-activity">
      <div class="hot">
        <div v-for="(k,i) in hotPic" :key="i" class="hotli">
          <img :src="k" alt class="hotpic" />
        </div>
      </div>
    </div>
    <!-- 3类家装 -->
    <div class="mob-floor" v-for="(item,index) in homeArr" :key="index">
      <mHeader :homeListtwo="item.name"></mHeader>
      <div class="mob-mid">
        <div v-for="(v,i) in item.product" :key="i">
          <img :src="v.url" alt="" @click="selected(v.id)">
        </div>
      </div>
      <div class="mob-btm">
        <div class="mob-btm-pic" v-for="(k,v) in item.two" :key="v">
          <img :src="k.url" alt class="btm-pic" @click="selected(k.id)" />
          <div class="mob-btm-text">
            <span>{{k.type}}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 两类 -->
    <div class="mob-pro last" v-for="(item,i) in homeListtwo" :key="'0'+i">
      <mHeader :homeListtwo="item.name"></mHeader>
      <div class="mob-pro-ul">
        <div class="mob-pro-con" v-for="(m,n) in item.content" :key="n" @click="title(m.title)">
          <h3>{{m.title}}</h3>
          <p v-if="m.text">{{m.text}}</p>
        </div>
      </div>
    </div>

    <!-- 底部导航 -->
    <Nav></Nav>
  </div>
</template>

<script>
import Nav from "../nav/nav"
import Slide from "../slide/slide"
import Axios from "axios"
import mHeader from "./mHeader"
import topHeader from '../header/topheader'
import detail from '../detail/detail'


export default {
  name: "home",
  data() {
    return {
      imgUrl: [],
      data: {},
      logo: "",
      hotPic: [],
      homeList: {},
      homeListtwo: {},
      selectedFood: {},
      homeArr:[]
    }
  },
  methods: {
    getData() {
      let url = "http://127.0.0.1:85/getData";
      Axios.get(url)
        .then(res => {
          console.log("res:", res);
          this.imgUrl = JSON.parse(res.data.data).home.slidepic;
          this.logo = JSON.parse(res.data.data).home.logo;
          this.hotPic = JSON.parse(res.data.data).home.bed;
          this.homeList = JSON.parse(res.data.data).home.homelist;
          this.homeListtwo = JSON.parse(res.data.data).home.homelisttwo;
          console.log("home", this.homeListtwo);
        })
        .catch(err => {
          console.log("err:", err);
        })
    },
    getData1() {
      let url = "http://127.0.0.1:85/getThree";
      Axios.get(url)
        .then(res => {
          console.log("123:", res.data.homeArr);
          this.homeArr = res.data.homeArr
        }).catch(err => {
          console.log("err:", err);
        })
    },
    selected(i){
      console.log(i);
      // this.$router.push('/detail');
      //  this.$router.push({
      //     name:"detail",
      //     params: {
      //       id:i
      //     }
      // })
       this.$router.push({
          path:"/detail",
          query: {
            id:i
          }
      })
    },
    title(x){
      this.$router.push({
          path:"/fenlei",
          query: {
            main:x
          }
      })
    }
  },
  mounted() {
    this.getData();
    this.getData1();
  },
  components: {
    Nav,
    Slide,
    mHeader,
    topHeader,
    detail
  }
}
</script>

<style scoped>
.home{
  margin-bottom: 77px;
}
header {
  width: 100%;
  /* height: 2.5rem; */
  height: 40px;
  background: #cf000e;
}
.header-search {
  position: relative;
  width: 100%;
}
.logo {
  height: 100%;
  position: absolute;
}
.logo > img {
  width: 82px;
  height: 21px;
  display: inline-block;
  margin-top: 0.625rem;
}

.search-box {
  margin: 0 90px 0 88px;
  padding-top: 5px;
  position: relative;
}
.search-input {
  padding: 0 0 0 1.5rem;
  font-size: 14px;
  height: 28px;
  line-height: 28px;
  border-radius: 2px;
  color: #888;
  border: 1px solid #fff;
  overflow: hidden;
  width: 95%;
}
.icon-sousuo {
  display: inline-block;
  position: absolute;
  color: #ccc;
  line-height: 28px;
  left: 5px;
  /* left:5px; */
}
.location {
  position: absolute;
  padding: 10px 15px;
  height: 20px;
  top: 0;
  right: 0;
  display: block;
}
.location span {
  font-size: 15px;
  color: #fff;
  line-height: 100%;
  text-align: center;
}

.category {
  width: 100%;
  padding: 3px 0;
  z-index: 1000;
  background: white;
  margin-bottom: 10px;
}
.itemList {
  width: 100%;
  padding: 0;
  display: flex;
}
.list-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  list-style: none;
  text-decoration: none;
  text-align: center;
  border-left: 1px solid #f2f2f2;
}
.list-item i {
  font-size: 25px;
  /* font-size:25px; */
}

.hot-activity .hot {
  display: flex;
  width: 100%;
}
.hotli {
  list-style: none;
  flex: 1;
}
.hotli > img {
  width: 100%;
  height: 176px;
  /* height: 123px; */
}
.mob-floor {
  background: #fff;
}

.mob-mid {
  display: flex;
  height: 200px;
}
.mob-mid > div {
  flex: 1;
  height: 100%;
}
.mob-mid > div img {
  width: 100%;
  height: 200px;
  display: block;
}
.mob-btm {
  display: flex;
  width: 100%;
}
.mob-btm-pic {
  flex: 1;
}
.btm-pic {
  width: 100%;
  height: 180px;
}
.mob-btm-text {
  background: white;
  text-align: center;
  /* height: 2rem; */
  height: 32px;
}
.mob-btm-text span {
  display: inline-block;
  width: 112px;
  height: 15px;
  font-size: 14px;
  line-height: 15px;
  border-radius: 20px;
  padding: 2px 0;
  margin-top: 8px;
}
.mob-btm-pic:first-of-type span {
  border: 1px solid #1c6fb6;
  color: #1c6fb6;
}
.mob-btm-pic:nth-of-type(2) span {
  border: 1px solid #d91c1c;
  color: #d91c1c;
}
.mob-btm-pic:last-of-type span {
  border: 1px solid #8a28b3;
  color: #8a28b3;
}
.mob-pro-ul {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background: white;
}
.mob-pro-con {
  list-style: none;
  width: 50%;
  padding: 10px 0 0 10px;
  box-sizing: border-box;
  background: #fff;
  border-right: solid 1px #e5e5e5;
  border-top: solid 1px #e5e5e5;
}
.mob-pro-con p{
    font-size: 16px;
    color: #999;
}

</style>
