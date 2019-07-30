<template>
    <div class="number-wrap">
            <div class="number-line">
                <label for="number">购买数量</label>
                <div class="number">
                    <button class="decrease" @click="decrement(cartList[i].id)">-</button>
                    <input type="number" :value="cartList[i].num" ref="numbox" readonly
                    @change="countChanged"
                    >
                    <button class="increase" @click="increment(cartList[i].id)">+</button>
                </div>
            </div>
        </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    name: "add",
    data(){
        return{
            productCount:0
        }
    },
    props: { //接收传入的good
        goodNum: {
            type: Number
        },
        i:{
          type:Number
        }
    },
    computed: {
        ...mapGetters(['cartList'])
    },
    methods:{
      decrement(id){
         this.$store.commit('decrement',id)
      },
      increment(id){
        console.log(this.cartList[this.i].num)
        this.$store.commit('increment',id)
      },
      countChanged(){
        console.log(this.$refs.numbox.value)
      }
    }
}
</script>

<style>
.number-line{
  padding-bottom: 10px;
    padding-top: 10px;
    line-height: 36px;
}
.number-wrap>label{
  line-height: 28px;
    font-weight: 700;
}
.number-wrap .number {
    height: 36px;
    width: 100px;
    border-radius: 3px;
    float: right;
    color: #999;
    margin-bottom: 33px;
}
.number button{
  float: left;
    outline: 0;
    width: 30px;
    font-size: 24px;
    line-height: 23px;
    height: 34px;
    border: 1px solid #f5f5f5;
    background: #f5f5f5;
}
.number input{
  float: left;
    width: 36px;
    text-align: center;
    font-size: 13px;
    font-weight: 700;
    box-sizing: border-box;
    margin: 0;
    line-height: 34px;
    height: 34px;
    border: 1px solid #f5f5f5;
    background-color: #f5f5f5;
}
</style>
