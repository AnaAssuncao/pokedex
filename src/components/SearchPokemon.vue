<template>
      <div class="search-container">

    <input 
      class="search-input"  
      v-model="namePokemon" 
      type="text" 
      required name="pokemon" 
      placeholder="Pokemon" />
    <button
      class="search-button"
      @click="$emit('onSearchPokemon',namePokemon)"
      >Buscar</button>
  </div>
</template>

<script>
export default {
  name: "search-pokemon",
  data(){
    return{
      namePokemon:''
    }
  },
}
</script>

<style scoped>

.search-container {
    display:flex;
    align-items:center;
    justify-content: center;
    margin-bottom: 50px; 
    width: 100%;
}

.search-input {
  border: 2px solid var(--gray);
  border-radius:10px;
  color: #6B778C;
  font-size:16px;
  height: 48px;
  margin-right: 20px; 
  padding-left: 16px;
  width: 22%;
}

.search-button{
  align-items: center;
    background-color: var(--blue);
    border: none;
    border-radius: 20px;
    color: var(--white);
    cursor: pointer;
    display: flex;
    font-weight: 600;
    font-size: 1rem;
    justify-content: center;
    height: 50px;
    padding: 10px;

    width: 150px;
}
</style>