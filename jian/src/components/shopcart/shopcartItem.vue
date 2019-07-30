<template>
    <div class="shopcartItem">
        <table>
          <tbody>
            <tr class="goods_item">
              <td class="td1" >
                <checkBtn :isChecked="product.checked" @click.native="checkClick"></checkBtn>
              </td>
              <td class="td2">
                <a>
                  <img :src="product.img" alt="" class="image">
                </a>
              </td>
              <td class="td3">
                <div class="goods_name">{{product.title}}</div>
                <div class="price">&yen;{{product.price}}</div>
                <div>
                  <add :goodNum='product.num' :i="i"></add>
                  <button @click="remove(product.id,i)">删除</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import checkBtn from '../checkBtn/checkBtn'
import add from '../add/add'
export default {
    name:"shopcartItem",
    data(){
        return{

        }
    },
    computed: {
        ...mapGetters(['cartList'])
    },
    props: {
        product: {
            type:Object,
            default() {
                return{
                    
                }
            }
        },
        i:{
          type:Number
        }
    },
    components:{
        checkBtn,
        add
    },
    methods: {
        checkClick() {
            this.product.checked = !this.product.checked
        },
        getSelectedCount(count){
          this.SelectedCount = count;
          this.SelectedCount = this.$refs.numbox.value
          console.log('123',this.$refs.numbox.value)
        },
        remove(id,index){
          // 把商品从state中根据传递的id删除，同时把当前组件中的list中，对应要删除的那个删除掉，
          // 使用index删除
          this.cartList.splice(index,1)
          this.$store.commit('removeFromCart',id)
        }
    }

}
</script>

<style>
.cart_list{
    padding-left: 10px;
    border-top: 1px solid #d8d8d8;
    border-bottom: 1px solid #d8d8d8;
    margin-top: 10px;
    background: #fff;
    padding-bottom: 10px;
    cursor: pointer;
}
td{
  padding-bottom: 10px;
  padding-top: 10px;
}
.td1{
  width: 30px;
}
.td1>input{
  margin-top:26px;
}
.checkbox{
    display: inline-block;
    width: 18px;
    height: 18px;
    line-height: 18px;
    text-align: center;
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    border: 1px solid #cecece;
    background: #fff;
    border-radius: 2px;
}
.td2{
  position: relative;
      width: 130px;
}
.goods_name{
    line-height: 15px;
    height: 30px;
    overflow: hidden;
    word-break: break-all;
    word-wrap: break-word;
    margin-right: 10px;
}
.price{
  /* line-height: 20px; */
}
.image{
    width: 115px;
    height: 76px;
}
</style>


