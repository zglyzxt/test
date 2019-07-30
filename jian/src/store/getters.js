export default {
    cartLength(state) {
        return state.cartList.length
    },
    cartList(state){
        return state.cartList
    },
    loveList(state){
        return state.loveList
    },
    Num(state){
        return state.cartList.num
    }
}