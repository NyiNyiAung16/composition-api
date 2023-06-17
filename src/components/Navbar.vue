<template>
  <header >
    <div class="headerText">
        Booty Post
    </div>
    <div>
        <router-link to="/">Home</router-link>
        <router-link :to="{name:'Create'}">Create</router-link>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style>
    header{
        display: flex;
        justify-content: space-between;
        padding: 16px 70px;
    }
    .headerText{
        color: yellow;
        font-weight: bold;
        font-size: 25px;
        text-transform: uppercase;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
    header a{
        text-decoration: none;
        color: rgb(216, 216, 216);
        padding: 0px 7px;
    }
    header a.router-link-exact-active{
        color: yellow;
    }
</style>