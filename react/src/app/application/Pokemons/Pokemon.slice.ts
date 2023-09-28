import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PokemonEntity } from '../../domain/entities/Pokemon';
import { PokemonRepo } from '../../infra/Pokemon.repo';
import { PokemonService } from '../../domain/useCases/Pokemon.service';

interface initialState {
  isLoading: boolean;
  pokemonData: PokemonEntity[];
  error?: string;
}

const initialState: initialState = {
  isLoading: false,
  pokemonData: [],
  error: '',
};

export const fetchPokemon = createAsyncThunk(
  'pokemonSlice/fetchPokemon',
  async () => {
    const pokeRepo = new PokemonRepo();
    const pokeService = new PokemonService(pokeRepo);
    const pokeData = await pokeService.GetPokemons();
    return pokeData;
  },
);

export const pokemonSlice = createSlice({
  name: 'pokemonSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPokemon.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      pokemonData: action.payload,
    }));
    builder.addCase(fetchPokemon.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(fetchPokemon.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      pokemonData: [],
      error: action.error.message,
    }));
  },
});

export default pokemonSlice.reducer;
