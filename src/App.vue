<template>
  <Header class="" />
  <router-view />
</template>
<script>
import Header from "@/components/header.vue";

export default ({
components: { Header },
})
</script>


<style lang="scss">
@import '~bootstrap/scss/bootstrap';
@import "@/assets/style/scss/_main.scss";



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
