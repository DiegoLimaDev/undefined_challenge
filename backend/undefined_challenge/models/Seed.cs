using undefined_challenge.Data;

namespace undefined_challenge.models
{
  public class Seed
    {
        public static async Task SeedData(AppDbContext context) {
          if (context.Pokemons.Any()) return;

          var pokemons = new List<Pokemon>
          {
            new() {
              Name = "Bulbasaur",
              Description= "Lives in the forest",
              Type = "Grass"
            },
            new() {
              Name = "Squirtle",
              Description= "Lives in the sea",
              Type = "Water"
            },
            new() {
              Name = "Charmander",
              Description= "Lives in the mountains",
              Type = "Fire"
            }
          };

          await context.Pokemons.AddRangeAsync(pokemons);
          await context.SaveChangesAsync();
        }
    }
}
