import {
    ADD_COUNTER,
    ADD_TO_CART,
    RECEIVE_USER_INFO
} from './mutation-types'

export default {
    addCart(context,payload){
        //查找之前的数组中是否有该商品
        let oldProduct = context.state.cartList.find(item => 
            item.id === payload.id
        )
        if(oldProduct){
            // oldProduct.count += 1
            context.commit(ADD_COUNTER,oldProduct)
        }else{
            payload.count = 1
            // context.state.cartList.push(payload)
            context.commit(ADD_TO_CART,payload)
        }
    },
    recordUser({commit},userInfo) {
        commit(RECEIVE_USER_INFO,{userInfo})
    }
}