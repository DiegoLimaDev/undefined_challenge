export class PokemonEntity {
  id: number;
  name: string;
  description: string;
  type: string;

  constructor(opts: PokemonEntity) {
    this.id = opts.id;
    this.name = opts.name;
    this.description = opts.description;
    this.type = opts.type;
  }
}
