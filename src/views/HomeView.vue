<template>
  <div class="container">
    <img alt="Vue logo" src="../assets/mew.png"/>
    <router-link to="/list" class="text">Ir para lista</router-link >
    <img alt="Vue logo" src="../assets/chikorita.png"/>
  </div>
</template>

<script>
// import NavBar from '@/components/NavBar.vue'
export default {
  name: 'Home-pokedex',
  props: {
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  align-items:center;
  background-color: #f2f3f5;
  display: flex;
  justify-content: space-around;
  height:95vh;
  padding-top:2rem;
}

.text{
  align-items:center;
  background-color: #7AC74C;
  box-shadow: 0px 1px 10px #7AC74C;
  color: #ffffff;
  border-radius: 20px;
  display: flex;
  font-size:20px;
  flex-direction:column;
  padding:32px;
}

</style>
