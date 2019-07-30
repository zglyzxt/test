<template>
  <div class="category">
      <!-- 头部 -->
      <topHeader></topHeader>
      <!-- 导航 -->
      <Nav></Nav>
    <div class="category-box">
        <!-- 左侧 -->
        <ul class="navtwo">
            <li v-for="(item,index) in fenlei" :key="index" class="fenlei-list" v-text="item.name"
                :class="{'active' : currentIndex === index}" @click="selectMenu(index)"></li>
        </ul>
        <!-- 右侧 -->
        <div class="category-content">
            <!-- <transition name="fade-out"> -->
                <div class="category-list" v-for="(k,v) in fenlei" :key="v" v-if="currentIndex == v">
                    <div v-for="(m,n) in k.content" :key="n" class="fenlei-div" @click="category(m.text)">
                        <div class="category-img">{{m.url}}</div>
                        <div>{{m.text}}</div>
                    </div>
                </div>
            <!-- </transition> -->
        </div>
    </div>
  </div>
</template>

<script>
import topHeader from '../header/topheader'
import Nav from '../nav/nav'
import Axios from "axios"
import reqCategory from "../../service/getData"
export default {
  name: 'category',
  data () {
    return {
      msg:"adf",
      fenlei:{},
      currentIndex: 0,
      categoryData: []
    }
  },
  created(){
      this.getData();
      // this.getCategoryData()
  },
  methods:{
      getData() {
      let url = "http://127.0.0.1:85/getData"
      Axios.get(url)
        .then(res => {
          console.log("res:", res);
          this.fenlei = JSON.parse(res.data.data).fenlei;
          console.log("category-name", this.fenlei);
        })
        .catch(err => {
          console.log("err:", err);
        })
    },
    selectMenu($index) {
        this.currentIndex = $index
    },
    category(text){
        this.$router.push({
          path:"/fenlei",
          query: {
            keyword:text
          }
      })
    }
  },
  components:{
      topHeader,
      Nav
  }
}
</script>


<style scoped>
.active {
  background-color: #f2f2f2;
  border-left: solid 2px red;
  color: red;
}
.category-box {
    width: 100%;
    display: flex;
}
.navtwo{
    width: 28%;
    list-style: none;
    margin:0;
    padding: 0;
    background: #fff;
    border-right: 1px #ddd solid;
}
.fenlei-list{
    list-style: none;
    width: 100%;
    text-align: center;
    line-height: 40px;
    font-size: 10px;
    height: 49px;
    line-height: 49px;
    overflow: hidden;
    border-right: 1px #ddd solid;
    border-bottom: solid 1px #ddd;
}
.category-content{
    background: white;
    /* border: solid 1px; */
    box-sizing: border-box;
    width: 72%;
}
.category-list{
    width: 100%;
    float: left;
    padding-bottom: 3px;
}
.category-img{
    width: 40px;
    height: 40px;
    display: inline-block;
    border:solid 1px;
}
.fenlei-div{
    width: 33.3%;
    padding: 10px 0 7px;
    text-align: center;
    float: left;
    font-size: 10px;   
}
</style>
