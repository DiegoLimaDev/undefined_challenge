import { PokemonEntity } from '../entities/Pokemon';

export interface IPokemonRepo {
  GetPokemons(): Promise<PokemonEntity[]>;
  GetPokemonById(id: number): Promise<PokemonEntity>;
}
