using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NSwag.Annotations;
using RentBikes.Services;

namespace RentBikes.Controllers
{
    /// <summary>
    /// A base class for any controller.
    /// </summary>
    /// <typeparam name="TServices">The type of the instance that provides commonly available services to the controller.</typeparam>
    /// <typeparam name="TDataContext">The type of the data context used by the controller's methods.</typeparam>
    [Consumes("application/json")]
    [Produces("application/json")]
    [ApiController]
    [SwaggerResponse(HttpStatusCode.BadRequest, typeof(void), Description = HttpStatusMessages.BadRequest)]
    public abstract class ApiControllerBase<TServices, TDataContext> : ControllerBase
        where TServices : ControllerServices<TDataContext>
        where TDataContext : class
    {

        #region Helper methods

        /// <summary>
        /// Creates an <see cref="OkObjectResult"/> if <paramref name="condition"/> is <c>true</c>
        /// or <see cref="NotFoundResult"/> if <paramref name="condition"/> is <c>false</c>.
        /// </summary>
        /// <param name="condition"></param>
        /// <returns></returns>
        protected IActionResult OkOrNotFound(bool condition)
        {
            return condition ? (IActionResult)Ok() : NotFound();
        }

        /// <summary>
        /// Creates an <see cref="OkObjectResult"/> if <paramref name="value"/> is not <c>null</c>
        /// or <see cref="NotFoundResult"/> if <paramref name="value"/> is <c>null</c>.
        /// </summary>
        /// <param name="value"></param>
        /// <returns></returns>
        protected IActionResult OkOrNotFound<T>(T value) where T : class
        {
            return value == null ? (IActionResult)NotFound() : Ok(value);
        }

        /// <summary>
        /// Creates an <see cref="OkObjectResult"/> if <paramref name="condition"/> is <c>true</c>,
        /// <see cref="NotFoundResult"/> if <paramref name="condition"/> is <c>false</c>
        /// or <see cref="ConflictObjectResult"/> if <paramref name="condition"/> is <c>null</c>.
        /// </summary>
        /// <param name="condition">Condition.</param>
        /// <returns></returns>
        protected IActionResult OkOrNotFoundOrConflict(bool? condition)
        {
            return condition == true ? Ok() : condition == false ? (IActionResult)NotFound() : Conflict();
        }

        /// <summary>
        /// Creates an <see cref="OkObjectResult"/> if <paramref name="condition"/> is <c>true</c>,
        /// <see cref="NotFoundResult"/> if <paramref name="condition"/> is <c>false</c>
        /// or <see cref="ConflictObjectResult"/> if <paramref name="condition"/> is <c>null</c>.
        /// </summary>
        /// <param name="condition">Condition.</param>
        /// <param name="conflictMessage">The message to return with <see cref="ConflictObjectResult"/>.</param>
        /// <returns></returns>
        protected IActionResult OkOrNotFoundOrConflict(bool? condition, string conflictMessage)
        {
            return condition == true ? Ok() : condition == false ? (IActionResult)NotFound() : Conflict(conflictMessage);
        }
        #endregion

    }

}
