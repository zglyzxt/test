<template>
    <div class="fixedBtm">
        <div class="bottom">
            <div class="all_check">
              <checkBtn :isChecked="isSelectAll" @click.native="cClick"/><span>全选</span>
            </div>
            <div class="all_btn">总计{{tototalPrice}}</div>
            <div class="all_count">结算</div>
        </div>
      </div>
    
</template>

<script>
import checkBtn from '../checkBtn/checkBtn'
import {mapGetters} from 'vuex'
export default {
    name:"bottomBar",
    components:{
        checkBtn
    },
    computed: {
    ...mapGetters(['cartList']),
    tototalPrice(){
      return '￥' + this.cartList.filter(item=>{
          return item.checked
        }).reduce((preValue,item) => {
          return preValue + item.price * item.num
        },0)
    },
    checkLength(){
      return this.cartList.filter(item=>item.checked).length
    },
    isSelectAll(){
      if(this.cartList.length === 0){
          return false
      } 
        for(let item of this.cartList){
            if(!item.checked){
                return false
            }
        }
        return true
      }
  },
  methods:{
      cClick(){
        if(this.isSelectAll){
            this.cartList.forEach(item=>item.checked=false)
        }else{
            this.cartList.forEach(item=>item.checked=true)
        }
      }
  }

}
</script>

<style>
.bottom{
  display: flex;
  width: 100%;
  background: white;
}
.bottom>div{
  text-align: center;
  padding: 10px 0;
  font-size: 18px;
}
.all_check{
  width: 20%;
}
.all_btn{
  width: 40%;
}
.all_count{
  width: 40%;
  background: orangered;
  color: white;
}
.fixedBtm{
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>


