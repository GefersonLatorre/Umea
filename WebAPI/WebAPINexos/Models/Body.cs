using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPINexos.Models
{
    public class Body
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(30)")]
        public string Options { get; set; }
        [Required]
        [Column(TypeName = "int")]
        public int Number { get; set; }
        [Required]
        [Column(TypeName = "int")]
        public int State { get; set; }
    }
}
