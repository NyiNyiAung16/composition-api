<template>
  <div v-if="post" class="singlePost">
    <h2>{{post.title}}</h2>
    <p>{{post.body}}</p>
    <div class="pill" v-for="tag in post.tags" :key="tag">{{tag}}</div>
    <button class="delete" @click="deletePost">Delete</button>
  </div>
  <div v-else>
    <Spinner></Spinner>
  </div>
</template>

<script>
import Spinner from '../components/Spinner'
import getPost from '../composables/getPost'
import {db} from '../firebase/config'
import {useRouter} from 'vue-router'
export default {
  components: { Spinner },
  props:['id'],
  setup(props){
    let {post,error,load}=getPost(props.id);
    load();
    let id=props.id;
    let router=useRouter();
    let deletePost=async()=>{
     await db.collection('posts').doc(id).delete()
      router.push('/')
    }
    return {post,error,deletePost};
  }
}
</script>

<style>
  button.delete{
    margin: 30px auto;
  }
</style>