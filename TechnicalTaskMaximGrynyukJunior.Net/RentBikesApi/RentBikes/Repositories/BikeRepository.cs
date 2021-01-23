using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RentBikes.DataAccess.EF;
using RentBikes.DataAccess.Models;
using RentBikes.DataAccess.Repositories.Interfaces;

namespace RentBikes.DataAccess.Repositories
{
    public class BikeRepository : IBikeRepository
    {
        private BikesDbContext Context { get; set; }
        public BikeRepository(BikesDbContext context)
        {
            Context = context;
        }

        /// <summary>
        /// Return all items.
        /// </summary>
        /// <returns></returns>
        public async Task<List<Bike>> GetAllBikes()
        {
            return await Context.Bikes.ToListAsync();
        }

        /// <summary>
        /// Return bike by id.
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public async Task<Bike> Get(int id)
        {
            return await Context.Bikes.FindAsync(id);
        }

        /// <summary>
        /// Returns all available bikes.
        /// </summary>
        /// <returns></returns>
        public async Task<List<Bike>> GetAvailableBikes()
        {
            return await Context.Bikes
                .Where(b => b.IsAvailable == true)
                .ToListAsync();
        }

        /// <summary>
        /// Returns all rent bikes.
        /// </summary>
        /// <returns></returns>
        public async Task<List<Bike>> GetRentBikes()
        {
            return await Context.Bikes
                .Where(b => b.IsRent == true)
                .ToListAsync();
        }

        /// <summary>
        /// Creates a new bike.
        /// </summary>
        /// <param name="item"></param>
        public async Task<Bike> Create(Bike bike)
        {
           bike.PublicId = Guid.NewGuid();
           bike.IsRent = true;
           bike.IsAvailable = false;
           await Context.Bikes.AddAsync(bike);  
           await Context.SaveChangesAsync();
           return await Get(bike.Id);
        }

        /// <summary>
        /// Deletes the bike by id.
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public async Task Delete(int id)
        {
            var bike = await Get(id);
            if (bike != null)
            {
                Context.Bikes.Remove(bike);
                await Context.SaveChangesAsync();
            }
        }


        /// <summary>
        /// Set rent to the bike by id.
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public async Task<Bike> SetRent(int id)
        {
            var bike = await Get(id);

            if (bike != null)
            {
                bike.IsRent = true;
                bike.IsAvailable = false;
                await Context.SaveChangesAsync();
            }

            return bike;
        }

        /// <summary>
        /// Set rent to the bike by id.
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public async Task<Bike> CancelRent(int id)
        {
            var bike = await Get(id);

            if (bike != null)
            {
                bike.IsRent = false;
                bike.IsAvailable = true;
                await Context.SaveChangesAsync();
            }

            return bike;
        }

        /// <summary>
        /// Updates information about the bike.
        /// </summary>
        /// <param name="item"></param>
        /// <returns></returns>
        public async Task<Bike> Update(Bike item)
        {
            var bike = await Get(item.Id);
            bike.IsAvailable = item.IsAvailable;
            bike.IsRent = item.IsRent;
            bike.Name = item.Name;
            bike.RentCost = item.RentCost;
            bike.Type = item.Type;
            Context.Bikes.Update(bike);
            await Context.SaveChangesAsync();
            return bike;
        }

    }
}
