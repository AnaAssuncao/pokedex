export async function getPokemonDetail(namePokemon){
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`)
  const detail = await response.json()
  const pokemon ={
    name: detail.name,
    img: detail.sprites?.front_default,
    base_experience:detail.base_experience,
    height:detail.height,
    weight:detail.weight,
    abilities:detail.abilities,
    stats:detail.stats,
    type: detail.types?.[0]?.type?.name
  }
  return pokemon 
}

export async function getPokemonList(offset = 0, limit=21) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
  const pokemonJson = await response.json()
  let pokemonList = pokemonJson.results.map(async (pokemon) => {
    const detail = await getPokemonDetail(pokemon.name)
    pokemon.img = detail.img
    pokemon.type = detail.type
    return pokemon
  })
  pokemonList = await Promise.all(pokemonList)
  return pokemonList
}