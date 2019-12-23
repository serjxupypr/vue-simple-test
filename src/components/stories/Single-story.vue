<template>
  <div class="single-story">
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
    <div >
      <!-- <Commentaries postId={postData.id}/> -->
    </div>
  </div>
</template>

<style lang="scss">
  
</style>