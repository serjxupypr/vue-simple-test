<template>
  <router-link to="/">
    <img src="../../assets/main-logo.png" alt="description">
  </router-link>
</template>

<script>
export default {
  name: 'mainLogo',
}
</script>

<style lang="scss" scoped>
  a {
    display: block;
    height: 70px;
    transition: transform .3s ease-out;
    opacity: 1;

    &:hover {
      transform: scale(1.15);
    }

    img {
      display: block;
      width: auto;
      height: 100%;
    }
  }
</style>