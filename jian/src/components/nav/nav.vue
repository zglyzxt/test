<template>
  <div class="nav">
      <ul class="navList">
          <router-link tag="li" class="nav-list-item active" to="home">
                <i class="iconfont icon-shouye"></i>
                <span>首页</span>
            </router-link>
            <router-link tag="li" class="nav-list-item" to="product">
                <i class="iconfont icon-fenlei"></i>
                <span>产品</span>
            </router-link>
            <router-link tag="li" class="nav-list-item" to="shopcart">
                <i class="iconfont icon-gouwuche"></i>
                <span>购物车</span>
            </router-link>
            <router-link tag="li" class="nav-list-item" to="user">
                <i class="iconfont icon-wode"></i>
                <span>我的</span>
            </router-link>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      msg: 'nav'
    }
  }
}
</script>


<style scoped>
.nav {
    position: fixed;
    left:0;
    bottom: 0;
    width: 100%;
    z-index: 1000; 
    background: white;
}
.navList{
    width: 100%;
    padding: 5px 0;
    display: flex;
}
.nav-list-item {
   flex: 1;
   display: flex;
   flex-direction: column;
   list-style: none;
   text-decoration: none;
   text-align: center; 
}
.router-link-active{
    color: red;
}
i {
    font-size: 16px;
}
span{
    font-size: 14px;
}
</style>
