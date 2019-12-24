<template>
  <div class="stories-card-item">
    <!-- <a to={`/stories/${storyId}`} className="story-link">
      <h3 className="story-title"
      style={{
        display: 'block',
        marginRight: '20px'
      }}>
        {story.title}
      </h3>
    </a> -->

    <!-- <a href="#" class="story-link">
      <h3 class="story-title">{{storyCardInfo.title}}</h3>
    </a> -->

    <router-link class="story-link" :to="{'name': 'stories.show', params: {id: storyCardInfo.id}}">
      <h3 class="story-title">{{storyCardInfo.title}}</h3>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'story-card',
  props: {
    storyCardInfo: Object,
  }
}
</script>

<style lang="scss">
  .stories-card-item {
    font-size: 18px;
    line-height: 24px;
    margin: 0 10px 20px;
    background: #ffffff;
    border: 1px solid #e3e3e3;
    width: calc(33.333% - 20px);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, .3);
    transform: translateY(0);
    border-radius: 4px;
    transition: box-shadow .3s ease-out, transform .3s ease-out, background .3s ease-out;
  }

  .stories-card-item a {
    text-decoration: none;
    display: block;
    height: 100%;
    color: #7c7c7c;
    transition: color .3s ease;
  }

  .stories-card-item:hover {
    box-shadow: 0 15px 30px -8px rgba(0, 0, 0, .3);
    transform: translateY(-4px);
    background: #5aa8a8;

    a {
      color: #000;
    }
  }

  .story-link {
    display: block;
    padding: 20px;
  }

  .story-title {
    margin: 0 0 10px;
  }
</style>