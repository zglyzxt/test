import {
    ADD_COUNTER,
    ADD_TO_CART,
    RECEIVE_USER_INFO
} from './mutation-types'
import {Toast} from 'mint-ui'
export default {
        //使用mutations来修改state中的状态
        //mutatations中的每个方法尽可能完成的事件比较单一一点
        //每个mutation最好做一件事情
        //可以跟踪状态，也是为什么不直接修改state的原因
        addToCart(state,payload){
            payload.checked = true //checkbox选框的状态
        //点击加入购物车中，如果之前有这个对应的商品，那么就只需要更新数量
        //如果没有，则直接把商品数据push到购物车的数组中
        //some()是对数组中每一项运行给定函数，如果该函数对任一项返回true，则返回true
            var flag = false
            state.cartList.some(item =>{
                if (item.id == payload.id){
                   item.num += Number(payload.num)
                   flag = true
                   return true
                }
            })
            if(!flag){
                state.cartList.push(payload)
            }
        },
        addToLove(state,payload){
            var flag = false
            state.loveList.some((item,i) =>{
                if (item.id == payload.id){
                   state.loveList.splice(i,1)
                   Toast({
                    position:"middle",
                    message:"取消收藏"
                   })
                   flag = true
                   return true
                }
            })
            if(!flag){
                Toast({
                    position:"middle",
                    message:"收藏成功"
                  })
                state.loveList.push(payload)
            }
        },
        removeFromCart(state,id){
            state.cartList.some((item,i)=>{
                if(item.id == id){
                    state.cartList.splice(i,1)
                    return true
                }
            })
        },
        increment(state,id){
            state.cartList.some((item,i)=>{
                if(item.id == id){
                    state.cartList[i].num++
                    return true
                }
            })
        },
        decrement(state,id){
            state.cartList.some((item,i)=>{
                if(item.id == id){
                    if(state.cartList[i].num == 1){
                        return
                    }
                    state.cartList[i].num--
                    return true
                }
            })
        },
        showLoading(state){
            state.LOADING = true
        },
        hideLoading(state){
            state.LOADING = false
        },
        // addCounter(state,payload){
        //     payload.count++
        // },
        // addToCart(state,payload){
        //     state.cartList.push(payload)
        // },
        // [ADD_COUNTER](state,payload){
        //     payload.count++
        // },
        // [ADD_TO_CART](state,payload){
        //     payload.checked = true
        //     state.cartList.push(payload)
        // },
        //用户名
        [RECEIVE_USER_INFO](state,{userInfo}){
            state.userInfo = userInfo
        }
}