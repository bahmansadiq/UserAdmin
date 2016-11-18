using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace UserAdminAPI.Models
{
    public class User
    {
   
        public  int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string EmailAddress { get; set;}
        public string UserName{ get; set; }
        public string Password{ get; set; }
        public DateTime UserDateCreated { get; set; }

        public virtual ICollection<UserRole> UserRoles { get; set; }
    }
}