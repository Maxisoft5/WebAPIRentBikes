using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using RentBikes.DataAccess.Models.Abstract;

namespace RentBikes.DataAccess.Models
{
    /// <summary>
    /// Contains information about a bike.
    /// </summary>
    public class Bike : BaseModel
    {
        /// <summary>
        /// Name.
        /// </summary>
        [Required]
        [Column(TypeName = "nvarchar(40)")]
        public string Name { get; set; }

        /// <summary>
        /// Type.
        /// </summary>
        [Required]
        [Column(TypeName = "tinyint")]
        public BikeType Type { get; set; }

        /// <summary>
        /// Rent cost.
        /// </summary>
        [Required]
        [Column(TypeName ="decimal(18,0)")]
        public decimal RentCost { get; set; }

        /// <summary>
        /// Available status.
        /// </summary>
        [Column(TypeName = "bit")]
        public bool IsAvailable { get; set; } = true;

        /// <summary>
        /// Rent status.
        /// </summary>
        [Column(TypeName = "bit")]
        public bool IsRent { get; set; }
    }
}
