<template>
<div class="catalog_item" @click="showDetails">
  <div class="item_img">
    <div class="no_item_in_shop" v-if="!item_data.inShop">
      <div class="warning">
        Нет в наличии
      </div>
    </div>
    <img :src="item_data.image" alt="">
  </div>
  <div class="item_description">

    <h2>{{item_data.name}}</h2>
    <p>{{item_data.count}}₽ </p>
  </div>
</div>
</template>

<script>
export default {
  name: "v-catalog-item",
  props : {
    item_data : {
      type : Object,
      default() {
        return {}
      }
    }
  },
  data(){
    return {}
  },
  methods : {
    showDetails(){
      this.$emit("detaitShow",this.item_data)
    }
  }
}
</script>

<style scoped>
.catalog_item{
  flex-basis: 25%;
  padding-right: 15px;
  margin-bottom: 25px;
  cursor: pointer;
}
.item_img{
  display: flex;
  align-items: center;
  justify-content: center;
  background: aliceblue;
  flex: 1;
  position: relative;
  height: 350px;
}
.item_img img{
  width: 150px;
}
.item_description{
  margin-top: 10px;
}
.item_description h2{
  color: darkgrey;
  margin-bottom: 5px;
}
.item_description p{
  font-weight: bold;
}
.no_item_in_shop{
  position: absolute;
  background: rgb(233 233 233 / 52%);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
.warning{
  background: #d3d3d3db;
  padding: 20px 0;
  color: white;
  width: 100%;
  text-align: center;
}
</style>