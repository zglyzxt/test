<template>
  <div class="search">
      <!-- 头部 -->
      <topHeader></topHeader>
      <!-- 搜索内容 -->
      <div class="container">
          <div class="goodlist">
            <ul>
              <li
                class="goods-item"
                v-for="(item,i) in arr"
                :key="i"
                @click.prevent="selected(item.id)"
                v-show="i < num"
              >
                <div class="thisitem">
                  <a href class="img-a">
                    <img :src="item.picMain" alt />
                  </a>
                  <div class="goods-date">
                    <div class="single-none">{{item.text}}</div>
                    <div class="extra single-none">¥{{item.count}}</div>
                    <div class="extra2 single-none">
                      已售<span>{{item.num}}</span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
      <div class="red">
        <a class="redBtn" @click="showMore">加载更多</a>
      </div>
    </div>
      </div>
  </div>
</template>

<script>
import topHeader from '../header/topheader'
import axios from "axios"
export default {
  name: 'search',
  data () {
    return {
      msg: 'search',
      keyword:"",
      num:7,
      arr:[]
    }
  },
  components:{
    topHeader
  },
  created(){
    this.getMsg()
  },
  methods:{
    showMore(){
      this.num = this.num + 3
    },
    selected(i) {
      this.$router.push({
          path:"/detail",
          query: {
            id:i
          }
      })
    },
    getMsg(){
      this.keyword = this.$route.query.keyword;
      let url = "http://127.0.0.1:85/searchData"
      axios.post(url,{keyword:this.keyword})
        .then(res => {
          console.log("res:", res.data.arr);
          this.arr = res.data.arr
          // console.log("category-name", this.fenlei);
        })
        .catch(err => {
          console.log("err:", err);
        })
    }
  }

}
</script>


<style>
.container{
  width: 100%;
}
ul,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}
ul{
  width: 100%;
}

.thisitem {
  margin-left: 5px;
  box-sizing: border-box;
  background: #fff;
  width: 100%;
  height: 150px;
  padding: 10px 0;
}
.img-a {
  float: left;
  width: 135px;
  padding-bottom: 7.5px;
  margin-right: 16px;
}
.img-a > img {
  width: 140px;
  height: 100px;
}
.goods-date {
  float: right;
  width: 220px;
  position: relative;
}
.single-none {
  display: block;
  white-space: normal;
  color: #555;
  font-size: 16px;
  text-overflow: ellipsis;
  white-space: normal;
}
.extra {
  color: red;
}
.extra2 {
  color: gray;
  padding: 10px 0;
}

.red{
  text-align: center;
}
.redBtn {
      background: #cf000e;
    color: #fff;
    border: 1px solid #cf000e;
    width: 90%;
    display: inline-block;
    text-align: center;
    padding: 10px 0;
    text-decoration: none;
}
</style>
