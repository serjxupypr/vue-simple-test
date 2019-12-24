<template>
  <header class="mian-header">
    <div class="container">
      <div class="logo-holder">
        <mainLogo />
      </div>
      <mainMenu :menulinks="menulinks" />
    </div>
  </header>
</template>

<script>
import mainLogo from './main-logo';
import mainMenu from './main-menu';

const menulinks = [
  {
    url: '/',
    urlName: 'home',
    id: 1,
  },
  {
    url: '/stories',
    urlName: 'stories',
    id: 2,
  },
]

export default {
  name: 'mainHeader',
  components: {
    mainLogo,
    mainMenu,
  },
  
  data: function() {
    return {
      menulinks,
    }
  },
}
</script>

<style lang="scss" scoped>
  .mian-header {
    padding: 20px 30px;
    background: #5aa8a8;
    border-radius: 16px
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>