using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPINexos.Models;

namespace WebAPINexos.Contexts
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }
       
        public DbSet<Body> Bodies { get; set; }

        public DbSet<Hood> Hoods { get; set; }

        public DbSet<Color> Colors { get; set; }
    }
}
