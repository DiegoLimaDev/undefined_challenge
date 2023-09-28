import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonModel } from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  postForm:FormGroup;

  id:number |any= null;
  pokemon: PokemonModel|any = {}
  constructor(private pokemonService:PokemonService, private route: ActivatedRoute, private router:Router){}

  ngOnInit(): void {
    this.postForm = new FormGroup({
      name: new FormControl(this.pokemon.name, Validators.required),
      description: new FormControl(this.pokemon.description, Validators.required),
      type: new FormControl(this.pokemon.type, Validators.required)
    })

      this.route.paramMap.subscribe((params) =>{
        const id = params.get('id');
        this.id = Number(id);
        console.log(this.id);
      });
      this.getPokemonById(this.id)
  }

  async getPokemonById(id:number) {
    (await this.pokemonService.getPokemonById(id)).subscribe((pokemon) => this.pokemon = pokemon);
  }

  x(name:string) {
    console.log(name);
  }

  async editPokemon(id:number) {
    ((await this.pokemonService.EditPokemon(id, this.postForm.value)).subscribe());
    setTimeout(() => {
      this.router.navigate(['home'])
    }, 200);
  }
}
