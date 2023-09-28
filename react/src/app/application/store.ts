import { configureStore } from '@reduxjs/toolkit';
import pokemonSlice from './Pokemons/Pokemon.slice';

export const store = configureStore({
  reducer: {
    pokemonData: pokemonSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
