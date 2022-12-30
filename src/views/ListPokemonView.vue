<template>
  <div class="container">
    <ul class="list">
      <li class="item" 
        v-for="pokemon in pokemonList" 
        :key="pokemon.name" 
        @click="handleOpenDetails(pokemon.name)"
        :class="'pokemon-'+ pokemon.type"
        > 
          <div>
            <h2>
              {{pokemon.name.toUpperCase()}}
            </h2>
            <div class="type">
              {{pokemon.type}}
            </div>
          </div>
          <img :src="pokemon.img"/>     
      </li>
    </ul>

    <div>
      <DetailsPokemon @onCloseDetails="handleCloseDetails" v-if="isOpenDetails" :namePokemon="namePokemon"></DetailsPokemon>    
    </div>

    <div class="list-button">

          <div class="container-button" v-if="page > 0">
            <button
            class="button"
              @click="changePage(-1)"
            >Voltar Página</button>
          </div>

        
          <div class="container-button" >
          <button
          class="button"
            @click="changePage(1)"
          >Proxima Página</button></div>
      </div>
  </div>
</template>

<script>
import DetailsPokemon from '@/components/DetailsPokemon.vue'
import {getPokemonList} from '../util/getPokemon'

export default {
    name: "list-pokedex",
    data() {
      this.handlePokemonList(0)
        return {
            page: 0,
            isOpenDetails:false,
            pokemonList:[],
            namePokemon:null
        };
    },
    props: {},
    methods: {
        changePage(newPage) {
            const newNumberPage = Number(this.page) + Number(newPage);
            this.page = newNumberPage;
            this.handlePokemonList(newNumberPage)
        },
        handleOpenDetails(namePokemon){
          this.isOpenDetails=true
          this.namePokemon=namePokemon
        },
        handleCloseDetails(){
          this.isOpenDetails=false
          this.namePokemon=null
        },
        handlePokemonList(newNumberPage){
          window.scrollTo(0, 0);
          const offset = 21 * newNumberPage
          getPokemonList(offset).then(response=>{
            this.pokemonList=response
         }).catch((e)=>{console.log(e)})
        }
    },
    components: { DetailsPokemon }
}
</script>

<style scoped>
.container{
  align-items:center;
  background-color: #fff ; /*background*/
  display: flex;
  flex-direction:column;
  justify-content: center;
  padding-top:32px;
  overflow: auto;
}
.list{
  justify-content: center;
  background-color: #fff ; /*background*/
  border-radius:16px;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
}

.list::-webkit-scrollbar {
  width: 10px;
}

.list::-webkit-scrollbar-thumb {
  border-radius:10px;
  background: rgb(172, 171, 171) ; /*gray*/
}

.item{
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.25);
  border-radius:20px;
  cursor:pointer;
  display: flex;
  justify-content: space-between;
  padding: 24px;
  margin: 16px;
  height: 200px;
  width: 350px;
}

.list-button{
  display:flex;
}

.container-button{
  margin:24px;
}

.button{
  align-items: center;
    background-color: var(--blue);
    border: none;
    border-radius: 5px;
    color: var(--white);
    cursor: pointer;
    display: flex;
    font-weight: 600;
    font-size: 1rem;
    justify-content: center;
    height: 50px;
    padding: 10px;

    width: 100%;
}

.button:hover{
    filter: brightness(0.9)
}

.type{
  color: var(--white);
  background-color: #ffffff59;
  border-radius:30px;
  padding: 12px 16px;
  margin-top:16px;
  width: fit-content;
}
</style>