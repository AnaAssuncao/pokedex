<template>
    <div class="content">
      <img alt="pokebola" class="img" src="../assets/pokebola.png"/>
        <h1 class="logo">Pokedex</h1>
    </div>
</template>

<script>
export default {
  name:'logo-pokedex'
}
</script>

<style scoped>
.content{
  align-items: center;
  display: flex;
  justify-content: center;
}
.logo{
  color: #000;
  font-size:36px;
}
.img{
  width:32px;
  margin-right: 12px;
}

</style>