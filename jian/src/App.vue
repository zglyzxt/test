<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Nav from "./components/nav/nav"
export default {
  name: 'App',
  components:{
    
  }
}
</script>

<style>
body{
  max-width: 800px;
}
#app {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background: #f4f4f4;
    /* -webkit-overflow-scrolling: touch; */
    position: absolute;
    left:0;
    top:0;
}
</style>
