<template>
  <div class="stories-content">
    <div class="container">
      <Loader v-if="!loaded"/>
      <div v-else class="stories-list">
        <StoryCard v-for="item in stories" :storyCardInfo="item" :key="item.id"/>
      </div>
    </div>
  </div> 
</template>

<script>
import Loader from '../loader/loader';
import StoryCard from '../stories/StoryCard';

export default {
  name: 'stories-content',
  components: {
    Loader,
    StoryCard,
  },

  data: function() {
    return {
      stories: this.$store.state.stories,
      loaded: this.$store.state.stories.length === 0 ? false : true,
    }
  },

  mounted: function() {
    this.$store.dispatch('get_all_stories');
  }
}
</script>

<style lang="scss">
  .stories-list {
    margin: 0 -10px;
    display: flex;
    flex-wrap: wrap;
    width: calc(100% + 20px);
  }
</style>