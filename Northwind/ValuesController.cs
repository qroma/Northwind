using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using NorthwindBL;
using System;
using System.Reflection;

namespace Northwind
{

  [Route("api/[controller]")]
  public class ValuesController : Controller
  {
    // GET: api/values
    [HttpGet]
    public List<Employees> GetAll()
    {
     
      List<Employees> records;
      try
      {
        using (NorthwindDbContext db = new NorthwindDbContext())
        {
          //simulating large amount of records in DB
          records = db.Employees.ToList();
          records.AddRange(db.Employees.ToList());
          records.AddRange(db.Employees.ToList());
          records.AddRange(db.Employees.ToList());
          return records;
        }
      }
      catch (Exception e)
      {
        return null;
      }
    }

    [HttpGet("{id}")]
    public List<Employees> Search(string id)
    {
      if (string.IsNullOrEmpty(id))
      {
        return null;
      }

      List<Employees> records;
      try
      {
        using (NorthwindDbContext db = new NorthwindDbContext())
        {         
          records = db.Employees.Where(record => record.First_Name.Contains(id) ||
          record.Last_Name.Contains(id) || record.Title.Contains(id) || record.RefTo.Contains(id)
          ).ToList();
                 
          return records;
        }
      }
      catch (Exception e)
      {
        return null;
      }
    }

  }

}
