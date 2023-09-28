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
    public async Task<ActionResult<dynamic>> CreatePokemon(Pokemon pokemon)
    {

      var entity = await _context.Pokemons.AddAsync(pokemon);
      await _context.SaveChangesAsync();

      return entity;
    }

    [HttpPut("{id}")]
    public async Task<dynamic> EditPokemon(int id, [FromBody]Pokemon pokemon)
    {
      var entity = await _context.Pokemons.FindAsync(id);

      if (entity == null) return "not found";

      entity.Name = pokemon.Name;
      entity.Description = pokemon.Description;
      entity.Type = pokemon.Type;

      await _context.SaveChangesAsync();

      return entity;
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult<dynamic>> DeletePokemon(int id)
    {
      var pokemon = await _context.Pokemons.FindAsync(id);

      if (pokemon == null) return "not found";

      _context.Pokemons.Remove(pokemon);
      await _context.SaveChangesAsync();

      return pokemon;
    }
    }
}
