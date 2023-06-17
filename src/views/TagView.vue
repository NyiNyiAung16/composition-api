<template>
    <div v-if="error">{{error}}</div>
    <div v-if="posts.length" class="grid">
        <div>
            <Posts :posts="filteredPosts"></Posts>
        </div>
        <div>
            <TagCloud :posts="posts"></TagCloud>
        </div>
    </div>
    <div v-else>
        <Spinner></Spinner>
    </div>
</template>

<script>
import Spinner from '../components/Spinner'
import TagCloud from '../components/TagCloud'
import Posts from '../components/Posts'
import SinglePost from '../components/SinglePost'
import { computed } from 'vue';
import getPosts from '../composables/getPosts'
export default {
  components: {
    Spinner,
    TagCloud,
    Posts, SinglePost },
    props:['tag'],
    setup(props){
       let {error,posts,load}=getPosts();
       load();

        let filteredPosts=computed(()=>{
            return posts.value.filter((post)=>{
                return post.tags.includes(props.tag)
            })
        })

       return {error,posts,filteredPosts}
    }
}
</script>

<style>
    .tagHead{
        color: yellow;
        padding: 0px 70px;
        text-transform: uppercase;
    }
</style>