using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using undefined_challenge.models;

namespace undefined_challenge.Data
{
    public class AppDbContext :DbContext
    {
        protected readonly IConfiguration Configuration;

        public AppDbContext(IConfiguration configuration) {
          Configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options) {
          options.UseNpgsql(Configuration.GetConnectionString("undefined_db"));
        }

        public required DbSet<Pokemon> Pokemons {get;set;}
    }
}
