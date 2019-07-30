import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'
import actions from './actions'
import getters from './getters'
import createPersistedState from "vuex-persistedstate"
import {Toast} from 'mint-ui'
Vue.use(Vuex)

// vuex管理数据
const state = {
    cartList : [],//商品信息
    userInfo:{},//用户信息存储
    loveList:[],
    LOADING:false
}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    plugins: [createPersistedState({
        storage: window.localStorage
    })]
})

export default store
