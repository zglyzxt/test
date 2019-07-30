<template>
    <div class="shoplist">
        <!-- 列表 -->
        <shopcartItem v-for="(item,index) in cartList" :key="index" :product="item" :i="index"></shopcartItem>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import shopcartItem from './shopcartItem'
export default {
    name:"shoplist",
    computed: {
        ...mapGetters(['cartList'])
    },
    components:{
        shopcartItem
    }
}
</script>

<style>

</style>


