<template>
  <div class="post">
    <h2>Post Lists</h2>
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post"></SinglePost>
    </div>
  </div>

</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue'
import SinglePost from './SinglePost'
export default {
  components: { SinglePost },
    props:['posts'],
    
}
</script>

<style scoped>
  .post{
    max-width: 1200px;
    padding: 0px 40px;
  }
  .post h2{
    color: yellow;
  }
</style>