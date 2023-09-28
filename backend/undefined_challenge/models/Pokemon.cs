using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace undefined_challenge.models
{
    public class Pokemon
    {
        [Key]
        public int Id {get;set;}
        public required string Name {get;set;}
        public required string Description {get;set;}
        public required string Type {get;set;}
    }
}
