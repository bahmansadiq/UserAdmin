using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using UserAdminAPI.Models;

namespace UserAdminAPI.Data
{
    public class UserAdminDataContext : DbContext
    {
        public UserAdminDataContext() :base("USERADMIN")
        {
            this.Configuration.LazyLoadingEnabled = false;
            this.Configuration.ProxyCreationEnabled = false;
        }
        public IDbSet<User> Users { get; set; }
        public IDbSet<Role> Roles { get; set; }
        public IDbSet<UserRole> UserRoles { get; set; }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
          // base.OnModelCreating(modelBuilder);
            //compound key
            modelBuilder.Entity<UserRole>()
            .HasKey(ur => new { ur.UserId, ur.RoleId });
            // a role has many userroles
            modelBuilder.Entity<Role>()
                .HasMany(r => r.UserRoles)
                .WithRequired(ur => ur.Role)
                .HasForeignKey(ur => ur.UserId);
            // a suser has many userroles
            modelBuilder.Entity<User>()
                .HasMany(u => u.UserRoles)
                .WithRequired(ur => ur.User)
                .HasForeignKey(ur => ur.UserId);
        }
    }
}