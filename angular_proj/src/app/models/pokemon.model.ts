export class PokemonModel {
  name: string;
  description:string;
  type:string;

  constructor( opt: PokemonModel ) {
    this.name = opt.name;
    this.description = opt.description;
    this.type = opt.type
  }
}
