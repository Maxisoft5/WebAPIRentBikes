using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RentBikes.Controllers
{
    /// <summary>
    /// Contains HTTP status messages.
    /// </summary>
    public static class HttpStatusMessages
    {   /// <summary>
        /// The entity has been created.
        /// </summary>
        public const string Created = "The entity has been created.";

        /// <summary>
        /// The operation completed successfully.
        /// </summary>
        public const string OkAction = "The operation completed successfully.";

        /// <summary>
        /// The entity has been updated.
        /// </summary>
        public const string OkUpdate = "The entity has been updated.";

        /// <summary>
        /// The entity has been deleted or does not exist.
        /// </summary>
        public const string OkDelete = "The entity has been deleted or does not exist.";

        /// <summary>
        /// Information about the entity.
        /// </summary>
        public const string OkGet = "Information about the entity.";

        /// <summary>
        /// Information about the entities.
        /// </summary>
        public const string OkList = "Information about the entities.";

        /// <summary>
        /// The entity does not exist.
        /// </summary>
        public const string NotFound = "The entity does not exist.";

        /// <summary>
        /// Malformed, missing or invalid input data.
        /// </summary>
        public const string BadRequest = "Malformed, missing or invalid input data.";

    }
}
