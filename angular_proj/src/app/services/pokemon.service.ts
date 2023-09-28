import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  url = 'http://localhost:5228/api/pokemons/'
  constructor(private http: HttpClient) { }

  async getPokemons() {
    return await this.http.get(this.url);
  }
}
