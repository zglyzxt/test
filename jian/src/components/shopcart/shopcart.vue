<template>
  <div class="shopcart">
    <div class="content">
      <header class="user-head">
        <div class="head-left"><i class="iconfont icon-left" @click="goBack">&lt;</i></div>
        <div class="head-text"><span>购物车</span></div>
      </header>  
      <!-- 列表 -->
      <div class="cart_list" v-if="list.length > 0">
        <shoplist></shoplist>
      </div>
      <!-- 购物车空了 -->
      <div v-else class="empty">
        <p>您还没有加入任何商品</p>
        <p><button type="button" class="buyBtn" @click="goToShop">前往选购</button></p>
      </div>
      <!-- 底部 -->
      <bottomBar v-if="btmShow"></bottomBar>

    </div>
  </div>
</template>

<script>
import add from '../add/add'
import Nav from '../nav/nav'
import checkBtn from '../checkBtn/checkBtn'
import bottomBar from './bottomBar'
import shopcartItem from './shopcartItem'
import shoplist from './shoplist'
import {mapGetters} from 'vuex'
export default {
  name: 'shopcart',
  data () {
    return {
      msg: 'shopcart',
      btmShow:false
    }
  },
  computed: {
    //两种语法
    //辅助函数仅仅是将store中的getter映射到局部计算属性
    // ...mapGetters(['cartLength'])
    ...mapGetters({
      length:'cartLength',
      list:'cartList'
    }),
    checkLength(){
      return this.list.filter(item=>item.checked).length
    }
  },
  components:{
      Nav,
      add,
      checkBtn,
      bottomBar,
      shoplist
  },
  created(){
    this.thisShow()
  },
  updated(){
    this.thisShow()
  },
  methods:{
    goBack() {
        this.$router.go(-1)
      },
      checkClick(){
        if(this.isSelectAll){
          this.list.forEach(item => item.checked = false)    
        }else{
          this.list.forEach(item => item.checked = true) 
        }
      },
      goToShop(){
        this.$router.push('/product')
      },
      thisShow(){
        if(this.list.length>0){
          this.btmShow=true
        }else{
          this.btmShow=false
        }
      }
  }
}
</script>


<style scoped>
.shopcart{
  height:calc(100% - 50px -50px - 40px)
}
.content{
  height:100%;
  overflow: hidden;
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

.buyBtn{
  border: none;
  outline: none;
  background: red;
  color: white;
  text-align: center;
  padding: 10px 15px;
}
.empty{
  margin: 150px auto;
  width: 50%;
  text-align: center;
}

</style>
