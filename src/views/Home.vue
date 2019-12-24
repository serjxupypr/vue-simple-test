<template>
  <div class="home">
    <router-link class="to-stories" to="/stories">
      <img src="../assets/puzzle.png" alt="">
    </router-link>
  </div>
</template>

<script>
export default {
  name: "home",
};
</script>

<style lang="scss">
  //reset
  * {
    box-sizing: border-box;
  }

  .home {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 70px 0;

    .to-stories {
      transition: transform .3s ease;

      &:hover {
        transform: scale(1.2);
      }
    }
  }
</style>
