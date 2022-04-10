<template>
  <h1>Каталог товаров</h1>
  <div class="catalog_items">
    <v-catalog-item
        v-for="item in catalog_data"
        :key="item.id"
        :item_data="item"
        @detaitShow="showCartDetail"
    />
  </div>
  <div class="info_detail_item" v-if="isShowDetail">
    <div class="wrapper_detail">
      <div class="close" @click="isShowDetail=false"><img :src="require('../assets/close.png')" alt=""></div>
      <div class="left_part">
        <img :src="CURR_ITEM?.image" alt="">
      </div>
      <div class="right_part">
        <div class="right_describtion">
          <h2>{{ CURR_ITEM?.name }}</h2>
          <p>{{ CURR_ITEM?.count }}</p>
        </div>
        <div v-if="CURR_ITEM.countInCart > 0" class="add_or_less">
          <button @click ="removeFromCart">-</button>
          <h2>{{CURR_ITEM.countInCart}}</h2>
          <button @click="addToCart">+</button>
        </div>
        <div v-if="CURR_ITEM.countInCart === 0" class="right_buttons">
          <button @click ="addToCart" v-if="CURR_ITEM.inShop">Добавить в корзину</button>
          <button style="cursor: default" v-if="!CURR_ITEM.inShop">Нет в наличии</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VCatalogItem from "@/components/v-catalog-item";
import jsonData from "/data_items.json";
import {mapActions} from "vuex";
import {mapGetters} from 'vuex'

export default {
  components: {
    VCatalogItem
  },
  computed : {
    ...mapGetters ([
      "CART", "CURR_ITEM"
    ])
  },
  name: "v-catalog",
  data() {
    return {
      catalog_data: jsonData,
      isShowDetail: false,
      currentItem: null
    }

  },
  methods: {
    ...mapActions([
      "ADD_TO_CART",
      "DELETE_FROM_CART",
      "CHANGE_CURR"
    ]),
    addToCart(){
      this.ADD_TO_CART(this.CURR_ITEM);
      // this.currentItem.countInCart++
    },
    removeFromCart(){
      this.DELETE_FROM_CART(this.CURR_ITEM.id)
      // this.currentItem.countInCart--
    },
    showCartDetail(data) {
      this.isShowDetail = true
      this.CHANGE_CURR(data)
    }

  }
}
</script>

<style scoped>
h1{
  max-width: 85%;
  margin: 0 auto;
  margin-top: 60px;
  font-size: 40px;
  color: #574f4f;
}
.add_or_less{
  display: flex;
  align-items: center;
  justify-content: left;
  gap: .4rem;
  width: 100%;
}
.add_or_less button{
  padding: 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.catalog_items {
  display: flex;
  flex-wrap: wrap;
  padding: 100px 0;
  padding-top: 30px;
  width: 85%;
  max-width: 90%;
  margin: 0 auto;
}

.info_detail_item {
  position: absolute;
  width: 100vw;
  top: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  background: #fff6f678;
}

.wrapper_detail {
  background: white;
  display: flex;
  gap: 2rem;
  position: relative;
  padding: 150px;
  box-shadow: -1px -1px 20px 0px #d9d9d9;
}

.right_part {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /*justify-content: space-between;*/
  /*margin: 105px 0;*/
}
.right_describtion{
  margin-bottom: 80px;
  text-align: left;
  width: 100%;
}
.right_buttons{
  width: 100%;
}

button {
  background: #574f4f;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  width: 100%;
  color: white;
}

h2 {
  font-size: 20px;
  margin-bottom: 5px;
}

.left_part img {
  width: 250px;
  max-width: 250px;
}

.close img {
  width: 25px;
  cursor: pointer;
}

.close {
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 999;
}

</style>