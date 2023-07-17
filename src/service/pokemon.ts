import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Pokemon, Pokemons } from '../types/IPokemon'


export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (builder) => ({
      getPokemonByName: builder.query<Pokemon, string>({
        query: (name) => `pokemon/${name}`,
      }),
      getPokemons: builder.query<Pokemons, void>({
        query: () => 'pokemon',
      })
    }),
  })


  export const { useGetPokemonByNameQuery, useGetPokemonsQuery } = pokemonApi