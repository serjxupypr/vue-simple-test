<template>
  <nav class="main-nav">
    <ul class="main-nav-list">
      <li v-for="link in menulinks" :key="link.id" class="main-nav-list__item">
        <router-link :to="link.url">{{link.urlName}}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'mainMenu',
  props: {
    menulinks: Array,
  }
}
</script>

<style lang="scss">
  .main-nav-list {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;

    &__item {
      font-size: 18px;
      font-weight: 600;

      a {
        transition: color, .3s;
        display: block;
        padding: 10px 20px;
        text-transform: uppercase;
        text-decoration: none;
        color: #000;

        &:hover {
          color: #fff;
        }

        &.router-link-exact-active {
          text-decoration: underline;
        }
      }
    }
  }
</style>