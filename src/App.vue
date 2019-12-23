<template>
  <div id="app">
    <mainHeader />
    <div class="page-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import mainHeader from "./components/main-header/main-header";

export default {
  name: 'mainApp',
  components: {
    mainHeader,
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
