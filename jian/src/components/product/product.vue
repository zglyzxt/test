<template>
  <div class="product">
    <div class="product-top">
      <div class="layout-middle">
        <input type="text" 
          class="layout-search-input" 
          name="keyword" 
          placeholder="搜索产品" 
          ref="search-input" 
          v-model="word"
          @keyup.enter="searchbtn"
        />
      </div>
    </div>
    <div class="category-toolbar">
      <!-- 下拉菜单 -->
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
        <van-dropdown-item v-model="value3" :options="option3" />
        <van-dropdown-item v-model="value4" :options="option4" />
      </van-dropdown-menu>
    </div>
    <!-- loading -->
    <div class='mid'>
      <van-loading size="100px" v-if="LOADING" vertical type="spinner" color="blue"></van-loading>
    </div>
    <div class="goodlist">
      <ul>
        <li
          class="goods-item"
          v-for="(item,i) in goodsArr"
          :key="i"
          @click.prevent="selected(item.id)"
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
    <Nav></Nav>
    
  </div>
</template>

<script>
import {DropdownMenu,Loading} from 'vant'
import {LOADING} from 'vuex'
import Nav from "../nav/nav"
import axios from "axios"
import {mapState} from 'vuex'
export default {
  name: "product",
  data() {
    return {
      msg: "product",
      num:3,
      word:"",
      goodsArr: [],
      keyword:"",
      show: false,
      nowIndex: 0,
      value1: 0,
      value2: 'a',
      value3: '',
      value4: '',
      option1: [
        { text: '综合', value: 0 },
        { text: '销量', value: 1 },
        { text: '价格', value: 2 },
        { text: '评论数', value: 3 }
      ],
      option2: [
        {text:'升序', value:'a'}
      ],
      option3: [
        {text:'降序', value:''}
      ],
      option4: [
        {text:'筛选', value:''}
      ]
    }
  },
  created() {
    this.getGood();
    // this.getSelectedFood()
  },
  computed:{
      ...mapState(['LOADING'])
        },
  methods: {
   async showMore(){
      // this.num = this.num + 3
        let url = "http://127.0.0.1:85/page";
        this.$store.commit('showLoading')
        await axios.get(url).then(res => {
            console.log("分类res:", res.data.arr);
            res.data.arr.map((item,i)=>{
              this.goodsArr.push(item)
            })
          }).catch(err => {
            console.log("err:", err);
          })
          this.$store.commit('hideLoading')
    },
    getGood() {
      let url = "http://127.0.0.1:85/getTwo";
      axios
        .get(url)
        .then(res => {
          console.log("res:", res.data.goodsArr);
          this.goodsArr = res.data.goodsArr;
        })
        .catch(err => {
          console.log("err:", err);
        });
    },
    selected(i) {
      // this.$router.push('/detail/'+i);
      this.$router.push({
          path:"/detail",
          query: {
            id:i
          }
      })
    },
    searchbtn(){
      //键盘事件
      console.log(this.word);
      this.$router.push({
          path:"/search",
          query: {
            keyword:this.word
          }
      })
    }
  },
  components: {
    Nav
  }
}
</script>


<style scoped>
.mid{
  width: 100%;
  text-align: center;
  position: fixed;
  top: 50%;
  z-index: 900;
  color:blue;
}
.product {
  position: relative;
  border-bottom: 0 none;
  background: #fff;
  margin-bottom: 100px;
}
.layout-middle {
  height: 30px;
  margin: 0 15px;
  padding-top: 7px;
}
.layout-middle input {
  height: 28px;
  line-height: 28px;
  font-size: 15px;
  color: #999;
  border: 1px solid #c7c7c7;
  border-radius: 5px;
  overflow: hidden;
  width: 100%;
  padding: 0 5px;
  text-align: center;
  box-sizing: border-box;
  outline: 0;
}
.category-toolbar {
  display: flex;
  width: 100%;
  border-bottom: solid 1px;
}
.category-toolbar > div {
  flex: 1;
  text-align: center;
  padding: 15px 0;
}
ul,
li {
  padding: 0;
  margin: 0;
  list-style: none;
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
.all {
  text-decoration: none;
  color: black;
}
.category-subtoolbar {
  background: #fff;
  position: absolute;
  z-index: 4;
  /* display: none; */
  width: 100%;
  border-top: solid 1px #d8d8d8;
  box-shadow: 0 3px 3px #ccc;
}
.category-toolbar li {
  text-align: left;
  border: solid 1px;
  padding: 10px 0;
}
.show {
  display: block;
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper > div {
  flex: 1;
  text-align: center;
  height: 36px;
  line-height: 36px;
}
.dropdownWrapper {
  border: 1px solid #2c3e50;
  font-size: 14px;
}
.dropdownWrapper li {
  display: block;
}

.nav-item.active {
  background: #e3e3d3;
}
.dropdownBtn {
  display: inline-block;
  width: 100%;
  height: 100%;
}
.nav-item {
  cursor: pointer;
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
