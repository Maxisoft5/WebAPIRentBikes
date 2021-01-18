using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using NSwag.Annotations;
using RentBikes.DataAccess.Models;
using RentBikes.DataAccess.Repositories;
using RentBikes.DataAccess.Repositories.Interfaces;
using RentBikes.Services;

namespace RentBikes.Controllers
{
    [ApiController]
    [Route(LocalApiControllerConsts.StandardRoute)]
    public class RentBikeController : ApiControllerBase<ControllerServices<BikeRepository>, BikeRepository>
    {
        #region fields
        private IBikeRepository BikeRepository { get; set; }

        #endregion

        #region Constructor
        public RentBikeController(IBikeRepository bikeRepository)
        {
            BikeRepository = bikeRepository;
        }
        #endregion

        /// <summary>
        /// Return a bike by id.
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(
             [FromRoute, Required] int id
            )
        {
            return OkOrNotFound(await BikeRepository.Get(id));
        }

        /// <summary>
        /// Creates a new entity.
        /// </summary>
        /// <param name="model">Data.</param>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> Create(
            [FromBody, Required] Bike bike
            )
        {
            if (bike == null)
            {
                return BadRequest();
            }

            return OkOrNotFound(await BikeRepository.Create(bike));
        }

        /// <summary>
        /// Returns all available bikes
        /// </summary>
        /// <returns></returns>
        [HttpGet("AvailableBikes")]
        public async Task<IActionResult> GetAvailableBikes()
        {
            return OkOrNotFound(await BikeRepository.GetAvailableBikes());
        }

        /// <summary>
        /// Returns all rent bikes.
        /// </summary>
        /// <returns></returns>
        [HttpGet("RentBikes")]
        public async Task<IActionResult> GetRentBikes()
        {
            return OkOrNotFound(await BikeRepository.GetRentBikes());
        }

        /// <summary>
        /// Delete bike by id.
        /// </summary>
        /// <returns></returns>
        [HttpDelete("{id}")]
        public async Task Delete(
             [FromRoute, Required] int id
            )
        {
            await BikeRepository.Delete(id);
        }

        /// <summary>
        /// Set rent to the bike by id.
        /// </summary>
        /// <returns></returns>
        [HttpPut("{id}")]
        public async Task<IActionResult> SetRent(
             [FromRoute, Required] int id
            )
        {
            return OkOrNotFound(await BikeRepository.SetRent(id));
        }

        /// <summary>
        /// Cancel rent to the bike by id.
        /// </summary>
        /// <returns></returns>
        [HttpPut("{id}")]
        public async Task<IActionResult> CancelRent(
             [FromRoute, Required] int id
            )
        {
            return OkOrNotFound(await BikeRepository.CancelRent(id));
        }

        /// <summary>
        /// Delete bike by id.
        /// </summary>
        /// <returns></returns>
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateRent(
             [FromRoute, Required] int id,
             [FromBody, Required] Bike model
            )
        {
            if (model == null || model.Id != id)
            {
                return BadRequest();
            }

            var bike = BikeRepository.Get(id);
            if (bike == null)
            {
                return NotFound();
            }

            return OkOrNotFound(await BikeRepository.Update(model));
        }
    }
}
