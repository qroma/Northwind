//using Microsoft.EntityFrameworkCore;
//using System;
//using System.Collections.Generic;
//using System.Text;

//namespace NorthwindBL
//{
//    public partial class NorthwindDbContext:DbContext
//    {
//        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//        {
//            if (!optionsBuilder.IsConfigured)
//            {
//                optionsBuilder.UseSqlServer(@"Data Source=DESKTOP-I8IMG01\SQLEXPRESS;
//      Initial Catalog=Northwind;Integrated Security=True;
//      Persist Security Info=True;");
//            }
//        }

//        protected override void OnModelCreating(ModelBuilder modelBuilder)
//        {
//        }

//        public virtual DbSet<Employee> Employee { get; set; }
//    }
//}
