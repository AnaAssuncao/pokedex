<template>
      <div class="ModalMask" @click="$emit('onCloseDetails')">
      <div class="Container">
        <div class="Content" v-if="pokemon.type">
          <div class="Banner" :class="'pokemon-'+ pokemon.type" >
            <div class="Title">{{namePokemon.toUpperCase()}}</div>
            <img class="Image" :src="pokemon.img"/>
          </div>

          <div class="Details">
            <div class="DetailsContent">
              <div class="DetailsData">
                {{pokemon.height}}m
              </div >
              <div class="DetailsText">
                height
              </div >
            </div >
            <div class="DetailsContent">
              <div class="DetailsData">
                {{pokemon.weight}}kg
              </div >
              <div class="DetailsText">
                weight
              </div >
            </div >
            <div class="DetailsContent">
              <div class="DetailsData">
                {{pokemon.base_experience}}
              </div >
              <div class="DetailsText">
                Base Exp
              </div >
            </div >
          </div >

          <div class="Abilities">
            <div class="AbilitiesTitle" >
              Abilities
            </div >
            <div class="AbilitiesContent">
              <div class="AbilitiesName" v-for="{ability} in pokemon.abilities" :key=ability>{{ability.name}}</div>
            </div >
          </div >

          <div class="Stats">
            <div class="StatsTitle">
              Stats
            </div>

            <div class="StatsContent" v-for="{base_stat, stat} in pokemon.stats" :key=stat.name>
              <div class="StatsName"> {{stat.name}}</div >
                    <div class="StatsProgress">
                      <div class="BarContainer">
                        <div class="StatsBar" :class="'pokemon-'+ pokemon.type" :style="{width:(base_stat / 255) * 100 + '%'}"  > </div>
                      </div >
                      <p>{{base_stat}}</p>
                    </div >
            </div>
            <!-- arrumar width desse -->
          </div>
          <div class="ContainerButton">
            <button class="BackButton" :class="'pokemon-'+ pokemon.type" @click="$emit('onCloseDetails')" >Voltar</button >
          </div >
        </div >

        <div class="Content ContentErro" v-if="erro">
          <p class="Title">
            {{ erro }}
          </p>
          <br>
          <p class="Title">
            Tente novamente!
          </p>
          <br>
          <div class="ContainerButton">
            <button class="BackButton pokemon-dark" @click="$emit('onCloseDetails')" >Voltar</button >
          </div >
        </div>
      </div >
    </div >
</template>

<script>
import {getPokemonDetail} from '../util/getPokemon'
export default {
  name: "details-pokemon",
  props:{
    namePokemon: String
  },
  data(){
      getPokemonDetail(this.namePokemon).then(response=>{
        this.pokemon =response
      }).catch((e)=>{
        this.erro=`Infelizmente não encontramos o pokémon ${this.namePokemon}!`
        console.log(e)
      })
      return {
        pokemon: {
          img: '/'
        },
        erro:''
      }
    }  
}

</script>

<style scoped>
.ModalMask{
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  z-index: 9;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}
  
.Container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  margin: 0px auto;
  padding: 24px 0;
}
.Content {
  background: var(--white);
  border-radius:20px;
  height: 70vh;
  width: 400px;
  position:relative;
  overflow:auto;}

.Content::-webkit-scrollbar {
  display: none;
}

.ContentErro{
  height: fit-content;
}

.Banner {
  align-items: center;
  border-radius:20px;
  display: flex;
  flex-direction: column;
  height:200px;
  padding: 24px;
}

.Image {
  position: absolute;
  width: 50%;
  top: 48px;
}

.Title {
  font-size:20px;
  font-weight: 800;
  line-height: 1.4;
  text-align: center;
  margin-top:24px;
}


.Details  {
  display: flex;
  margin-top: 54px;
  align-content: center;
  justify-content: space-around;
}

.DetailsContent  {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.DetailsData  {
  font-size:1.3rem;
  font-weight: 800;
}

.DetailsText  {
  margin-top: 12px;
}

.Abilities  {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 24px 0;
}

.AbilitiesTitle {
  display: flex;
  font-weight: 800;
  margin-top: 12px;
}

.AbilitiesName  {
  display: flex;
  margin: 12px;
  padding: 12px;
  background-color: var(--gray);
  border-radius:20px;
}

.AbilitiesContent  {
  display: flex;
}

.Stats  {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 24px;
  margin: 24px 0;
}

.StatsTitle {
  display: flex;
  font-weight: 800;
}

.StatsName  {
  margin-top: 12px;
}

.StatsContent  {
  width:100%;
}

.StatsProgress  {
  display:flex;
  width:100%;
  height: 24px;
}
.BarContainer  {
  background-color: #555; /*gray*/
  border-radius:20px;
  margin-right:12px;
  width:100%;
}

.StatsBar  {
  border-radius:20px;
  height: 100%;
}

.ContainerButton {
  display:flex;
  align-items: center;
  justify-content: center;
  width:100%
}

.BackButton  {
  color: var(--white);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  margin: 16px;
  text-align: center;
  padding: 12px;
  border-radius: 30px;
  border: none;
}

</style>