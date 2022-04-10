<template>
  <div class="cart">
    <div class="cart-image-and-desc">
      <div class="image"><img :src="cart_item.image" alt=""></div>
      <div class="desc">
        <h2>{{cart_item.name}}</h2>
      </div>
    </div>
    <div class="price-and-count">
      <span>Цена: {{cart_item.countInCart * cart_item.count}}₽ </span>
      <span>Колличество: <button class="add_or_less" @click="deleteCart(cart_item)">-</button> {{cart_item.countInCart}} <button class="add_or_less" @click="addfunc">+</button></span>
    </div>
    <button class="button-delete" @click ="deleteFully(cart_item.id)">Удалить</button>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "v-cart-item",
  props : {
    cart_item : {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    ...mapActions([
      "DELETE_FROM_CART",
        "ADD_TO_CART",
        "FULLY_REMOVE"
    ]),
    addfunc(){
      this.ADD_TO_CART(this.cart_item)
    },
    deleteCart(card_item){
      this.DELETE_FROM_CART(JSON.parse(JSON.stringify(card_item.id)))
    },
    deleteFully(id){
      this.FULLY_REMOVE(id)
    }

  }
}
</script>

<style scoped>
.add_or_less{
  padding: 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #574f4f;
  border: none;
  color: white;
}
.cart{
  margin-bottom: 15px;
  box-shadow:  0  0 20px 0px #bbbbbb;
  padding: 35px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cart-image-and-desc{
  display: flex;
  align-items: center;
}
.image{
  width: 140px;
}
.image img{
  width: 100%;
  height: 100%;
}
button{
  background: none;
  border: none;
  cursor: pointer;
}
.price-and-count{
  gap: 1rem;
  display: flex;
  align-items: center;
}
</style>