<template>
  <v-header :cart_data="CART"/>
  <router-view></router-view>
<!--    <v-catalog-->
<!--        @addNewCartItem="addCartItem"/>-->
</template>

<script>
// import VCatalog from "@/components/v-catalog";
import VHeader from "@/components/v-header";
import {mapGetters} from "vuex";

export default {
  components: {
    VHeader
  },
  data() {
    return {
      cart: []

    }
  },
  computed : {
    ...mapGetters ([
      "CART"
    ])
  }

}
</script>

<style>
* {
  box-sizing: border-box;
  font-size: 100%;
  margin: 0;
  padding: 0;
  font-family: "Cascadia Mono";
}

</style>
