using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using undefined_challenge.Data;
using undefined_challenge.models;

namespace undefined_challenge.Controllers
{
  public class PokemonsController : BaseApiController
    {
    private readonly AppDbContext _context;

    public PokemonsController(AppDbContext context)
    {
      _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<List<Pokemon>>> GetPokemons()
    {
      return await _context.Pokemons.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<dynamic>> GetPokemon(int id)
    {
      var pokemon =  await _context.Pokemons.FindAsync(id);

      if (pokemon == null) return "not found";

      return pokemon!;
    }

    [HttpPost]
    public async Task<ActionResult<string>> CreatePokemon(Pokemon pokemon)
    {

      _context.Pokemons.Add(pokemon);
      await _context.SaveChangesAsync();

      return $"{pokemon.Name} has been created with the id {pokemon.Id}";
    }

    [HttpPut("{id}")]
    public async Task<string> EditPokemon(int id, [FromBody]Pokemon pokemon)
    {
      var entity = await _context.Pokemons.FindAsync(id);

      if (entity == null) return "not found";

      entity.Name = pokemon.Name;
      entity.Description = pokemon.Description;
      entity.Type = pokemon.Type;

      await _context.SaveChangesAsync();

      return "editado";
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult<string>> DeletePokemon(int id)
    {
      var pokemon = await _context.Pokemons.FindAsync(id);

      if (pokemon == null) return "not found";

      _context.Pokemons.Remove(pokemon);
      _context.SaveChanges();

      return $"Pokemon with the {id} has been deleted";
    }
    }
}
