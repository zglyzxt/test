<template>
   <div>
       <header class="user-head">
        <div class="head-left"><i class="iconfont icon-left" @click="goBack">&lt;</i></div>
        <div class="head-text"><span>收藏</span></div>
      </header>  

      <div class="love-list">
            <ul>
              <li
                class="goods-item"
                v-for="(item,i) in loveList"
                :key="i"
                @click.prevent="selected(item.id)"
              >
                <div class="thisitem">
                  <a href class="img-a">
                    <img :src="item.img" alt />
                  </a>
                  <div class="goods-date">
                    <div class="single-none">{{item.title}}</div>
                    <div class="extra single-none">¥{{item.price}}</div>
                  </div>
                </div>
              </li>
            </ul>
        </div>
   </div>
</template>
<script>
import Nav from '../nav/nav'
import {mapGetters} from 'vuex'
export default {
    name:"love",
    data(){
        return{

        }
    },
    computed: {
    //两种语法
    //辅助函数仅仅是将store中的getter映射到局部计算属性
    // ...mapGetters(['cartLength'])
    ...mapGetters({
      loveList:'loveList'
    })
  },
  methods:{
      goBack() {
        this.$router.go(-1)
      },
      selected(i) {
      this.$router.push({
          path:"/detail",
          query: {
            id:i
          }
      })
    }
  }
}
</script>
<style>
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
</style>

