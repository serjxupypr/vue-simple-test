<template>
  <div class="stories-page">
    <!-- <h4>stories will be here soon (use <a href="https://jsonplaceholder.typicode.com/" target="_blank">jsonplaceholder.typicode.com</a> )</h4> -->
    <h2 class="stories-page__title">Choose your story to read ^^</h2>
    <StoriesContent />
  </div>
</template>

<script>
import StoriesContent from '../components/stories/Stories-content';
export default {
  name: 'Stories',
  components: {
    StoriesContent,
  },
}
</script>

<style lang="scss" scoped>
  .stories-page {
    padding: 60px 20px;
    font-size: 26px;

    &__title {
      margin: 0 0 50px;
    }
  }
</style>