import axios from 'axios';
import { PokemonEntity } from '../domain/entities/Pokemon';
import { IPokemonRepo } from '../domain/interface/Pokemon.interface';

export class PokemonRepo implements IPokemonRepo {
  url = 'http://localhost:5228/api/pokemons/';

  async GetPokemons(): Promise<PokemonEntity[]> {
    const data = await axios.get(this.url).then((res) => res.data);
    return data.map((pokemon: PokemonEntity) => ({
      id: pokemon.id,
      name: pokemon.name,
      description: pokemon.description,
      type: pokemon.type,
    }));
  }

  async GetPokemonById(id: number): Promise<PokemonEntity> {
    const pokemon = await axios.get(`${this.url}${id}`).then((res) => res.data);
    return pokemon;
  }
}
