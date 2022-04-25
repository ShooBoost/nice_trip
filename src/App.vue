<template class="">
  <!-- <Header class="" /> -->
  <Navbar class="order-3 order-md-0 fixed-bottom sticky-md-top"></Navbar>
  <router-view/>
</template>
<script>
// import Header from "@/components/header.vue";
import Navbar from "@/components/navbar.vue";

export default {
  // components: { Header },
  components: { Navbar },
};
</script>


<style lang="scss">
@import "~bootstrap/scss/bootstrap";
@import "@/assets/style/scss/_main.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
