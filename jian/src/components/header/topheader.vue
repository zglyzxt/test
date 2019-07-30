<template>
  <header>
      <div class="header-search">
        <router-link tag="i" to="/home" class="logo">
          <img :src="logo" alt="" />
        </router-link>
        <div class="search-box">
          <i class="iconfont icon-sousuo"></i>
          <input type="text" class="search-input" placeholder="搜索你感兴趣的东西" />
        </div>
        <a class="location">
          <span>全国</span>
        </a>
      </div>
    </header>
</template>

<script>
import Axios from "axios"
export default {
  name: 'topheader',
  data() {
      return {
          logo:""
      }
  },
  methods: {
      getData() {
      let url = "http://127.0.0.1:85/getData";
      Axios.get(url)
        .then(res => {
          this.logo = JSON.parse(res.data.data).home.logo
          console.log(this.logo)
        })
        .catch(err => {
          console.log("err:", err);
        })
    }
  },
  created() {
      this.getData()
  }
}
</script>

<style>
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

</style>
