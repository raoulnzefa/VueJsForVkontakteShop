<template>
  <div class="header">
    <div class="wrapper">
      <div class="routes">
        <router-link to="/" class="route"><span>Главная</span></router-link>
        <router-link to="/vitrina" class="route"><span>Витрина</span></router-link>
      </div>
      <div class="bin">
        <router-link :to="{name : 'cart'}" class="link">
          <h2>Корзина</h2><span>{{ cart_data.length }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-header",
  props: {
    cart_data: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.routes{
  display: flex;
  gap: 1rem;

}
.link {
  display: flex;
  text-decoration: none;
  color: black;
}
.route{
  text-decoration: none;
  color: black;
}

.header {
  height: 65px;
  padding: 0;
  background: aliceblue;
  display: flex;
  align-items: center;

}
.wrapper{
  width: 85%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
}

.bin {
  width: 85%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: right;
}

.bin span {
  margin-left: 15px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: red;
  color: white;
}

h2 {
  cursor: pointer;
}
</style>