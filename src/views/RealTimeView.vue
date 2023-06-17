<template>
  <h1>test realtime database</h1>
    <div v-for="post in posts" :key="post.id">
        <div>
            <h2>{{post.title}}</h2>
            <p>{{post.body}}</p>
        </div><hr>
    </div>
</template>

<script>
import Posts from '../components/Posts'
import { ref } from 'vue'
import {db} from '../firebase/config'
export default {
  components: { Posts },
    setup(){
        let posts=ref([]);
        db.collection('posts').orderBy('created_time','desc').onSnapshot((snap)=>{
            posts.value=snap.docs.map((doc)=>{
                return {id:doc.id,...doc.data()}
            })
        })
        return {posts};
    }
}
</script>

<style>

</style>