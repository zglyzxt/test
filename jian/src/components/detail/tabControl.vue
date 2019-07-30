<template>
    <div class="tabControl">
        <div v-for='(item,i) in titles' :key="i" 
        :class="{active:i===currentIndex}"
        @click="itemClick(i)"
        >
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:"tabControl",
    props: {
        titles: {
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
            currentIndex:0
        }
    },
    methods:{
        itemClick(index){
            this.currentIndex = index
        }
    }
}
</script>

<style>
.tabControl{
    display: flex;
    width: 100%;
    background: white;
    z-index: 9;
}
.tabControl>div{
    flex: 1;
    text-align: center;
    height: 40px;
    line-height: 40px;
}
.active{
    color:pink;
}
</style>


