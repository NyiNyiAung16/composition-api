<template>
    <div class="tag-cloud">
        <h2>Tag cloud</h2>
        <div v-for="tag in filteredTags" :key="tag" class="pill">
            <router-link :to="{name:'Tag',params:{tag}}">{{tag}}</router-link>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    props:['posts'],
    setup(props){
        let tags=ref([]);
        props.posts.forEach(post => {
            post.tags.forEach((tag)=>{
                tags.value.push(tag);
            })
        });
        let filteredTags=tags.value.filter((tag,index,array)=>{
            return array.indexOf(tag)===index;
        })
        return {filteredTags};
    }
}
</script>

<style>
    .tag-cloud h2{
        color: yellow;
        text-transform: uppercase;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
    .tag-cloud a{
        text-decoration: none;
    }
    .tag-cloud a:hover{
        color: red;
    }
</style>