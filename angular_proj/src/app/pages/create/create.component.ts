import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PokemonModel } from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  postForm:FormGroup;


  constructor(private pokemonService:PokemonService, private router:Router){}

  ngOnInit(): void {
    this.postForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      type: new FormControl(null, Validators.required)
    })

  }

  async CreatePokemon() {
    ((await this.pokemonService.CreatePokemon(this.postForm.value)).subscribe());
    setTimeout(() => {
      this.router.navigate(['home'])
    }, 200);
  }

}
