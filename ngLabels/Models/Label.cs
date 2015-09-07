using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ngLabels.Models
{
    public class Label
    {
        private static int nextId = 0;

        public int Id { get; } = nextId++;

        public string Text { get; set; }

        public string Color { get; set; }

    }
}
