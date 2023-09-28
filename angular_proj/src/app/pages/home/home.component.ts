import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PokemonModel } from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  data:PokemonModel[] | any = [];

  constructor(private pokemonService:PokemonService, private http:HttpClient){}

  ngOnInit(): void {
      this.getPokemon()
  }
  async getPokemon() {
    (await this.pokemonService.getPokemons()).subscribe((data)=> this.data = data);
  }

}
