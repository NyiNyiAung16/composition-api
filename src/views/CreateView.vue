<template>
  <form @submit.prevent="addPost">
    <label>title</label>
    <input type="text" required v-model="title">
    <label>body</label>
    <textarea required v-model="body"></textarea>
    <label class="tagController">tags(enter add a new tag)</label>
    <input type="text" v-model="tag" @keydown.enter.prevent="handleKeydown">
    <div v-for="tag in tags" :key="tag" class="pill">
        {{tag}}
    </div>
    <button>create post</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import {useRouter} from 'vue-router'
import {db,timestamp} from '../firebase/config'
export default {
    setup(){
        let router=useRouter();
        let title=ref("");
        let body=ref("");
        let tag=ref('');
        let tags=ref([]);
        let handleKeydown=()=>{
            if(!tags.value.includes(tag.value)){
                tags.value.push(tag.value);
            }
            tag.value=''
        }
        let addPost=async()=>{
            let NewPost={
                    title:title.value,
                    body:body.value,
                    tags:tags.value,
                    created_time:timestamp()
                };
           let res=await db.collection('posts').add(NewPost)
           router.push('/')
        }
        return {title,body,tag,handleKeydown,tags,addPost};
    }
}
</script>

<style>
    form{
        max-width: 400px;
        padding: 50px;
        margin: 0 auto;
    }
    label{
        display: block;
        margin: 30px 0px;
        text-align: left;
        text-transform: uppercase;
        background-color: yellow;
        width: 100px;
        padding-left: 20px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
    input{
        border: none;
        padding: 10px;
        border-radius: 8px;
        width: 100%;
    }
    textarea{
        border: none;
        padding: 10px;
        border-radius: 8px;
        width: 100%;
    }
    button{
        display: block;
        margin-top: 18px;
        background-color: yellow;
        border: none;
        border-radius: 7px;
        padding: 8px;
    }
    .tagController{
        width: 280px;
    }
    .pill{
        display: inline-block;
        margin: 10px 10px 0 0;
        color:#444;
        background-color: #ddd;
        font-size: 14px;
        border-radius: 20px;
        padding: 8px;
    }
</style>