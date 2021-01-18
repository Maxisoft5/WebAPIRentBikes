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
        [SwaggerResponse(HttpStatusCode.OK, typeof(Bike), IsNullable = false, Description = HttpStatusMessages.OkGet)]
        [SwaggerResponse(HttpStatusCode.NotFound, typeof(void), IsNullable = false, Description = HttpStatusMessages.NotFound)]
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
        [SwaggerResponse(HttpStatusCode.Created, typeof(Bike), IsNullable = false, Description = HttpStatusMessages.Created)]
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
        [SwaggerResponse(HttpStatusCode.OK, typeof(IList<Bike>), IsNullable = false, Description = HttpStatusMessages.OkList)]
        public async Task<IActionResult> GetAvailableBikes()
        {
            return OkOrNotFound(await BikeRepository.GetAvailableBikes());
        }

        /// <summary>
        /// Returns all rent bikes.
        /// </summary>
        /// <returns></returns>
        [HttpGet("RentBikes")]
        [SwaggerResponse(HttpStatusCode.OK, typeof(IList<Bike>), IsNullable = false, Description = HttpStatusMessages.OkList)]
        public async Task<IActionResult> GetRentBikes()
        {
            return OkOrNotFound(await BikeRepository.GetRentBikes());
        }

        /// <summary>
        /// Delete bike by id.
        /// </summary>
        /// <returns></returns>
        [HttpDelete("{id}")]
        [SwaggerResponse(HttpStatusCode.OK, typeof(void), IsNullable = false, Description = HttpStatusMessages.OkAction)]
        [SwaggerResponse(HttpStatusCode.NotFound, typeof(void), IsNullable = false, Description = HttpStatusMessages.NotFound)]
        public async Task<IActionResult> Delete(
             [FromRoute, Required] int id
            )
        {
            return OkOrNotFound(await BikeRepository.Delete(id));
        }

        /// <summary>
        /// Delete bike by id.
        /// </summary>
        /// <returns></returns>
        [HttpPut("{id}")]
        [SwaggerResponse(HttpStatusCode.OK, typeof(Bike), IsNullable = false, Description = HttpStatusMessages.OkAction)]
        [SwaggerResponse(HttpStatusCode.NotFound, typeof(void), IsNullable = false, Description = HttpStatusMessages.NotFound)]
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
