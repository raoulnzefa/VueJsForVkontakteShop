<template>
<div class="wrapper">
  <h1>Витрина доступных товаров</h1>
  <div class="content">
    <div class="catalog_item"
         v-for="item_data in data_items"
         :key="item_data.id" draggable="true"
         @dragstart="dragStartHandler($event)"
         @drop="DropHandler($event,item_data)"
         @dragover="dragOverHandler($event)"
    >
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
    </div>
</div>
</template>

<script>
import {mapGetters} from "vuex";
import jsonData from "/data_items.json";

export default {
  name: "v-vitrina",
  data(){
    return{
      data_items : jsonData.filter( el => el.inShop).map( (el,index) =>{
        const new_one = el
        el.order = index
        return new_one
      })
    }
  },
  methods : {
    dragStartHandler(e) {
      e.preventDefault()
      console.log("started")
    },
    dragOverHandler(e){
      e.preventDefault()
      console.log(e.target)
    },
    DropHandler(e,item_data) {
      e.preventDefault()
      console.log(item_data)
    }
  },
  computed : {
    ...mapGetters ([
      "CART", "CURR_ITEM"
    ])
  },
}
</script>

<style scoped>
h1{
  margin-top: 60px;
  font-size: 40px;
  color: #574f4f;
}
.wrapper{
  width: 85%;
  margin: 0 auto;
}
.content  {
  display: flex;
  flex-wrap: wrap;
  padding-top: 30px;
}
.catalog_item{
  flex-basis: 25%;
  padding-right: 15px;
  margin-bottom: 25px;
  cursor: pointer;
  cursor: grab;
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