<template>
  <div class="singlePost">
    <router-link :to='{name:"Detail",params:{id:post.id}}'>
    <h2>{{post.title}}</h2>
    </router-link>
    <p>{{repairPostBody}}</p>
    <div v-for="tag in post.tags" :key="tag" class="pill">
      <router-link :to="{name:'Tag',params:{tag}}">{{tag}}</router-link>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
    props:['post'],
    setup(props){
        let repairPostBody=computed(()=>{
            return props.post.body.substring(0,150)+"....";
        })
        return {repairPostBody};
    }
}
</script>

<style>
  .singlePost a{
    text-decoration: none;
  }
  .singlePost h2{
    text-transform: uppercase;
    background-color: yellow;
    padding: 7px 10px 7px 18px;
    border-radius: 10px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    width: 200px;
  }
  .singlePost p{
    padding:0px 10px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
</style>