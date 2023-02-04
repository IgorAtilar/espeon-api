import axios from 'axios'

const POKEMON_TCG_API_KEY = process.env.POKEMON_TCG_API_KEY

export const pokemonTCGAPI = axios.create({
  baseURL: 'https://api.pokemontcg.io/v2',
  headers: {
    'X-Api-Key': POKEMON_TCG_API_KEY,
  },
})
