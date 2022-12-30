<template>
  <div class="container">
    <LogoPokedex></LogoPokedex>
    <nav >
      <router-link to="/">Home</router-link> |
      <router-link to="/list">Lista</router-link> |
      <router-link to="/about">Sobre</router-link>
    </nav>
  </div>
  <router-view/>
</template>

<script>
import './theme.css'
import LogoPokedex from './components/LogoPokedex.vue';

export default {
  components:{
    LogoPokedex
  }
}
</script>


<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


.container{
  align-items: center;
  box-shadow: 0px 1px 5px #ebebeb;
  display: flex;
  height:5%;
  justify-content: space-between;
  padding: 0 100px;
  z-index: 1;
}
</style>
