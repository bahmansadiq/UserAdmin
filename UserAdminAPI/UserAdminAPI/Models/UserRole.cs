using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace UserAdminAPI.Models
{
    public class UserRole
    {


        //foreign keys
        [Key]
        [Column(Order = 0)]
        public int RoleId { get; set; }
        [Key]
        [Column(Order = 1)]
        public int UserId { get; set; }
        public DateTime LastUpdated { get; set; }

        public virtual User User { get; set; }
        public virtual Role Role { get;  set; }

         
    }
}