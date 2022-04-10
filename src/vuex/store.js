import {createStore} from 'vuex'

// Create a new store instance.
const store = createStore({
    state: {
        cart: [],
        currentItem: null
    },
    mutations: {
        SET_CART: (state, product) => {
            if (state.cart.length > 0) {
                let flag = false
                state.cart.map(el => {
                    if (el.id === product.id) {
                        flag = true
                        el.countInCart++
                    }
                })
                if (!flag) {
                    let new_one = product
                    product.countInCart = 1
                    state.cart.push(new_one)
                }
            } else {
                let new_one = product
                product.countInCart = 1
                state.cart.push(new_one)
            }
        },
        REMOVE: (state, id) => {
            let flag = false
            let ind = null
            console.log(id)
            state.cart.map((el,index) => {
                if (el.id === id) {
                    if (el.countInCart > 1) {
                        el.countInCart--
                    }else{
                        el.countInCart--
                        flag = true
                        ind = index
                    }
                }
            })
            if(flag){
                state.cart.splice(ind,1)
            }
        },
        SET_CURRENT: (state, item) => {
            state.currentItem = item
        },
        REMOVE_FULLY : (state,id) =>{
            state.cart = state.cart.filter( el => el.id !== id)
        }

    },
    getters: {
        CART(state) {
            return state.cart
        },
        CURR_ITEM(state) {
            return state.currentItem
        }
    },
    actions: {
        ADD_TO_CART({commit}, product) {
            commit("SET_CART", product)
        },
        DELETE_FROM_CART({commit}, id) {
            commit("REMOVE", id)
        },
        CHANGE_CURR({commit}, item) {
            commit("SET_CURRENT", item)
        },
        FULLY_REMOVE({commit},id){
            commit("REMOVE_FULLY",id)
        }
    }
})

export default store;