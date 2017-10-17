using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Northwind;
using NorthwindBL;
using System.Collections.Generic;

namespace UnitTestProject1
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void GetAll()
        {
            // Arrange
            ValuesController controller = new ValuesController();

            // Act
            List<Employees> result = controller.GetAll() as List<Employees>;

            // Assert
            Assert.IsNotNull(result);
        }

        [TestMethod]
        public void Search()
        {
            // Arrange
            ValuesController controller = new ValuesController();

            // Act
            List<Employees> result = controller.Search("Adena") as List<Employees>;

            // Assert
            Assert.IsTrue(result[0].First_Name.Trim() == "Adena");
        }
    }
}
