<template>
  <div class="mob-title">
      <div class="header-position">
        <div class="header-line"></div>
        <div class="header-text">
          <span class="text">
            <a href="">{{homeListtwo}}</a>
          </span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'mHeader',
  data () {
    return {
      msg: 'mHeader',

    }
  },
  props:['homeListtwo']

 
}
</script>


<style scoped>
.mob-title{
  width: 100%;
  background: #f4f4f4;
  /* height: 36px; */
  height: 36px;
  line-height: 36px;
  padding: 10px 0;
}
.header-position {
    width: 120px;
    position: relative;
    margin: 0 auto;
}
.header-line{
    height: 18px;
    border-bottom: solid 1px #979797;
}
.header-text {
    width: 100%;
    text-align: center;
    position: absolute;
    left: 0;
    top: 1px
}
.header-text .text {
    color: #000;
    /* font-size: 12px; */
    font-size: 1rem;
    padding: 0 6px;
    background: #f4f4f4
}
.header-text a{
  padding: 0 10px;
  text-decoration: none;
  color: #333;
}
</style>
