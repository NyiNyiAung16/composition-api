<template>
  <div class="home">
    <div v-if="error">
      {{error}}
    </div>
    <div v-if="posts.length>0" class="grid">
      <div>
        <Posts :posts="posts"></Posts>
      </div>
      <div>
        <TagCloud :posts="posts"></TagCloud>
      </div>
    </div>
    <div v-else>
      <Spinner></Spinner>
    </div>
  </div>
</template>

<script>
import TagCloud from '../components/TagCloud'
import Spinner from '../components/Spinner'
import Posts from '../components/Posts'
import getPosts from '../composables/getPosts'


export default {
  components: {
    TagCloud,
    Spinner, Posts },
  
  setup(){
    let {error,posts,load}=getPosts();

    load();
    
    return {posts,error};

  }
  
}
</script>
<style >
  .grid{
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
  }
</style>