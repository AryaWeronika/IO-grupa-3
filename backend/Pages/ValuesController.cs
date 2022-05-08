using Microsoft.AspNetCore.Mvc;
using System;
using Npgsql;
using System.Collections.Generic;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Strona_internetowa.Pages
{
    [Route("surveys")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        // GET: api/<ValuesController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<ValuesController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<ValuesController>
        [HttpPost]
        public void Post([FromBody] Ankieta value)
        {
            var cs = "Host=localhost:5432;Username=postgres;Password=Redziok;Database=postgres";

            using var con = new NpgsqlConnection(cs);
            con.Open();

            var sql = "INSERT INTO public.ankieta(firstname, age, height, weight, work, hoursworked, hoursrelaxed, activityamount, favouriteactivity, alcoholusage, cigaretteusage, coffeeusage, sleepquality, hoursslept, energyquality, sickness, allergy, healthproblems, medicationintake, foodavoided) VALUES (@firstname, @age, @height, @weight, @work, @hoursworked, @hoursrelaxed, @activityamount, @favouriteactivity, @alcoholusage, @cigaretteusage, @coffeeusage, @sleepquality, @hoursslept, @energyquality, @sickness, @allergy, @healthproblems, @medicationintake, @foodavoided)";
            using var cmd = new NpgsqlCommand(sql, con);

            cmd.Parameters.AddWithValue("firstname", value.FirstName);
            cmd.Parameters.AddWithValue("age", value.Age);
            cmd.Parameters.AddWithValue("height", value.Height);
            cmd.Parameters.AddWithValue("weight", value.Weight);
            cmd.Parameters.AddWithValue("work",value.Work);
            cmd.Parameters.AddWithValue("hoursworked", value.HoursWorked);
            cmd.Parameters.AddWithValue("hoursrelaxed", value.HoursRelaxed);
            cmd.Parameters.AddWithValue("activityamount", value.ActivityAmount);
            cmd.Parameters.AddWithValue("favouriteactivity", value.FavouriteActivity);
            cmd.Parameters.AddWithValue("alcoholusage", value.AlcoholUsage);
            cmd.Parameters.AddWithValue("cigaretteusage", value.CigaretteUsage);
            cmd.Parameters.AddWithValue("coffeeusage", value.CoffeeUsage);
            cmd.Parameters.AddWithValue("sleepquality", value.SleepQuality);
            cmd.Parameters.AddWithValue("hoursslept", value.HoursSlept);
            cmd.Parameters.AddWithValue("energyquality", value.EnergyQuality);
            cmd.Parameters.AddWithValue("sickness", value.Sickness);
            cmd.Parameters.AddWithValue("allergy", value.Allergy);
            cmd.Parameters.AddWithValue("healthproblems", value.HealthProblems);
            cmd.Parameters.AddWithValue("medicationintake", value.MedicationIntake);
            cmd.Parameters.AddWithValue("foodavoided", value.FoodAvoided);
            cmd.Prepare();
            cmd.ExecuteNonQuery();

        }

        // PUT api/<ValuesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ValuesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
