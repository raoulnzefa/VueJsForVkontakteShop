<template>
  <div class="wrapper">
    <div class="back">
      <router-link :to="{name : 'home'}" class="link">
        <h3>Назад</h3>
        </router-link>
    </div>
    <div class="headline"><h1>Корзина товаров</h1></div>
    <div class="items" v-if="CART.length > 0">
      <v-cart-item
          v-for="cart in CART"
          :key="cart.id"
          :cart_item="cart"
      ></v-cart-item>
    </div>
    <div class="total">
      <h2>Всего: {{CART.reduce((acc,curr) => acc + (curr.countInCart * curr.count),0)}}₽</h2>
    </div>
    <div class="nothing" v-if="CART.length === 0">
      <p>В корзине пока пусто....</p>
    </div>
  </div>
</template>

<script>
import VCartItem from "@/components/v-cart-item";
import {mapGetters} from "vuex";

export default {
  name: "v-cart",
  components: {
    VCartItem
  },
  computed: {
    ...mapGetters([
      "CART"
    ])
  },
}
</script>

<style scoped>
.nothing{
  margin-top: 50px;
  height: 500px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.items {
  margin-top: 50px;
}
.link{
  text-decoration: none;
}

h1 {
  font-size: 40px;
  color: #574f4f;
}

h3 {
  color: #b6b4b4;
  margin-bottom: 5px;
  cursor: pointer;
}
.total{
  margin-top: 40px;
  padding-top: 50px;
  font-size: 30px;
  color: #574f4f;;
  text-align: right;
  border-top: 2px solid #e3e3e3;
}
.wrapper {
  padding: 100px 0;
  padding-top: 60px;
  margin: 0 auto;
  width: 85%;
}
</style>