import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
    pokemons: []
}

const initialState: CounterState = {
    pokemons: [],
}



export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        setPokemons: (state, action: PayloadAction<[]>) => {
            state.pokemons = action.payload;
        
        }
    }
})

export const { setPokemons } = pokemonSlice.actions

export default pokemonSlice.reducer