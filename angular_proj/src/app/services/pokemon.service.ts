import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { PokemonModel } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  url = 'http://localhost:5228/api/pokemons/'
  constructor(private http: HttpClient) { }

  async getPokemons() {
    return await this.http.get(this.url);
  }

  async getPokemonById(id:number) {
    return await this.http.get(this.url + id)
  }

  async CreatePokemon( pokemon:PokemonModel) {
    return await this.http.post(this.url, pokemon)
  }

  async EditPokemon(id:number, pokemon:PokemonModel) {
    return await this.http.put(this.url + id, pokemon)
  }

  async DeletePokemon(id:number) {
    return await this.http.delete(this.url + id)
  }
}
