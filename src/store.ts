import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import pokemonsReducer from './features/pokemons/pokemonsSlice'
import { pokemonApi } from './service/pokemon'
export const store = configureStore({
    reducer: {
      pokemons: pokemonsReducer,
      [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware),
  })




  // Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)