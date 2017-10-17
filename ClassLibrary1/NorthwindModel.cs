using Microsoft.EntityFrameworkCore;
using System;

namespace NorthwindBL
{
    public partial class Employees
    {
        public int Id { get; set; }
        public string First_Name { get; set; }
        public string Last_Name { get; set; }
        public string Title { get; set; }
        public int ProdSold { get; set; }
        public string RefTo { get; set; }
    }
}
