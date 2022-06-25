import api from '../../api/products.js';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cart: [],
    },
    mutations: {
        addProductToCart(state, payload) {
            if (!state.cart.some(e => e.id === payload.id) || !state.cart.length) {
                state.cart.push(payload)
                return
            }
            state.cart.find(e => {
                if (e.id === payload.id) {
                    e.amount = +e.amount + +payload.amount
                    e.price = (+e.price + +payload.price).toFixed(2)
                }
            })
        }
    },
    getters: {
        getCartPrice(state) {
            let allCartPrice = 0
            state.cart.forEach(e => {
                allCartPrice += +e.price
            })
            return allCartPrice
        },
        getCart(state) {
            return state.cart.reverse()
        }
    },
    actions: {
        getProductsList(ctx, data) {
            return api.getProductsList();
        },
    },
    modules: {
        ui_variable: {
            state: {
                currency: 'руб.'
            }
        }
    }
})
