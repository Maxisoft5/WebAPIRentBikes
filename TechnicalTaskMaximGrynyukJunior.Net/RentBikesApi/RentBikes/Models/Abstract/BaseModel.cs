using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace RentBikes.DataAccess.Models.Abstract
{
    public class BaseModel
    {
        [Key]
        public int Id { get; set; }
        public Guid PublicId { get; set; }
    }
}
