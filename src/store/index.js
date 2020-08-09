import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        cart: []

    },
    mutations: {
        addcart(state, payload) {
            state.cart.push(payload)
        },
        changenum(state, payload) {
            state.cart[payload].num++;
        },
        reserveflag(state, payload) {
            state.cart[payload].flag = !state.cart[payload].flag;
        },
        changeall(state, payload) {
            state.cart.forEach(value => {
                value.flag = payload;
            })
        }

    }

})

export default store