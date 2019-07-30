<template>
  <div class="slide">
      <div class="swiper-container" :class="{'empty': imgUrl === []}">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,i) in imgUrl" :key="i">
                        <img :src="item" class="swiper_img" ref="slideImg">
                </div>
            </div>
        <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/js/swiper.min.js'

export default {
  name: 'slide',
  data () {
    return {
      msg: 'slide'
    }
  },
  props:{
      imgUrl: {
        type: Array,
        default:()=>[]
    }
  },
  mounted(){
      this.slider = new Swiper('.swiper-container', {
        autoplay: true,
        speed: 300,
        loop: true,
        observer: true,
        observeParents: true,
        pagination: {
            el: '.swiper-pagination',
        }
    })
  }
}
</script>


<style scoped>
.slide img {
    min-height: 15rem;
    width: 100%;
    display: block;
}
</style>
