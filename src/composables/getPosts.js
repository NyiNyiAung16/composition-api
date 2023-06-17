import { ref } from "vue";
import {db,timestamp} from '../firebase/config'

let getPosts=()=>{
    let error=ref('');
    let posts=ref([]);
    let load=async()=>{
     try{
      let res=await db.collection('posts').orderBy("created_time","desc").get();
      posts.value=res.docs.map((doc)=>{
        return {id:doc.id,...doc.data()}
      })
      }
      catch(err){
        error.value=err.message;
     }
    }
    return {error,posts,load};
}

export default getPosts;