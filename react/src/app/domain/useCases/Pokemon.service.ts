import { PokemonEntity } from '../entities/Pokemon';
import { IPokemonRepo } from '../interface/Pokemon.interface';

export class PokemonService {
  PokemonRepo: IPokemonRepo;

  constructor(pokemonRepo: IPokemonRepo) {
    this.PokemonRepo = pokemonRepo;
  }

  async GetPokemons(): Promise<PokemonEntity[]> {
    return await this.PokemonRepo.GetPokemons();
  }

  async GetPokemonById(id: number): Promise<PokemonEntity> {
    return await this.PokemonRepo.GetPokemonById(id);
  }
}
