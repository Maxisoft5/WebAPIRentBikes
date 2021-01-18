using Microsoft.EntityFrameworkCore;
using RentBikes.DataAccess.Models;

namespace RentBikes.DataAccess.EF
{
    public class BikesDbContext: DbContext
    {
        public BikesDbContext(DbContextOptions<BikesDbContext> options) : base(options)
        {
            Database.EnsureCreated();
        }
        public DbSet<Bike> Bikes { get; set; }
    
    }
}
