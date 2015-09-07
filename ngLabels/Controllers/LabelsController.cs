using ngLabels.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ngLabels.Controllers
{
    public class LabelsController : ApiController
    {
        private static List<Label> allLabels = new List<Label>
        {
            new Label { Text="All Good", Color = "#0F0" },
            new Label { Text="Warning", Color="#FF0" },
            new Label { Text="Error", Color="#F00" },
            new Label { Text="Unkown", Color="#00F" },
            new Label { Text="Deferred", Color="#AAA" },
            new Label { Text ="Never", Color="#FFF" },
            new Label { Text= "Super Urgent", Color="#0FF"},
            new Label { Text= "Need more Information", Color="#F0F"}
        };

        // GET api/<controller>
        public IEnumerable<Label> Get()
        {
           return allLabels.AsEnumerable();
        }

        // GET api/<controller>/5
        public Label Get(int id)
        {
            return allLabels.Single(l => l.Id == id);
        }

        // POST api/<controller>
        public void Post([FromBody]Label value)
        {
            allLabels.Add(new Label
            {
                Text = value.Text,
                Color = value.Color
            });
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]Label value)
        {
            var toUpdate = Get(id);
            toUpdate.Text = value.Text;
            toUpdate.Color = value.Color;
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
            allLabels.RemoveAll(l => l.Id == id);
        }
    }
}