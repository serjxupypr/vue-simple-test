<template>
  <div class="single-story-holder">
    <div class="container">
      <Loader v-if="!loaded"/>
      <div v-else class="single-story">
        <header class="single-story-header">
          <div class="img-holder">
            <img src="../../assets/post-image.jpg" alt="site logo"/>
          </div>
          <div class="text-holder">
            <h2 class="single-story__title">
              {{story.title}}
            </h2>
            <div class="story-details">
              <span>Author: </span>
              <span>John Doe</span>
            </div>
          </div>
        </header>
        <div class="single-story-text-box">
          <p>
            {{story.body}}
          </p>
        </div>
        <!-- <div >
          Commentaiers will be later here

          <Commentaries postId={postData.id}/>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "../loader/loader"

export default {
  name: 'story',
  data: function () {
    return {
      loaded: false,
      story: {
        title: 'loading...',
        body: 'loading...',
      }
    }
  },

  mounted: async function () {
    await this.$store.dispatch('get_single_story', this.$route.params.id);
    this.story = this.$store.state.story;
    this.loaded = true;
  },

  components: {
    Loader,
  }
}
</script>

<style lang="scss">
  .single-story-holder {
    flex: 1 0 auto;
    padding: 40px 0;
    background: #fff;
    text-align: left;
  }

  .single-story {
    max-width: 900px;
    margin: 0 auto;

    &-header {
      overflow: hidden;
      position: relative;
      display: flex;
      align-items: flex-end;
      margin: 0 0 40px;
      min-height: 400px;
      border-radius: 5px;

      .img-holder {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        &:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .4) 55%, rgba(0, 0, 0, 1) 100%);
          z-index: 1;
        }

        img {
          position: absolute;
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }

    &__title {
      max-width: calc(100% - 50px);
      margin: 0 0 20px;
      font-size: 32px;
      text-transform: uppercase;
    }

    .text-holder {
      position: relative;
      width: 100%;
      padding: 30px;
      z-index: 1;
      color: #fff;
    }

    &-text-box {
      padding: 5px 0 5px 28px;
      border-left: 2px solid rgb(78, 153, 143); 
      font-size: 22px;
      line-height: 1.45;

      p {
        margin: 0 0 10px;

        &:last-child {
          margin: 0;
        }
      }
    }
  }
</style>