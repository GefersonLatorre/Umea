using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPINexos.Models
{
    public class Color
    { 
        [Key]
        public int Id { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(30)")]
        public string Options { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(10)")]
        public string Acronym { get; set; }
        [Required]
        [Column(TypeName = "int")]
        public int Body { get; set; }
        [Required]
        [Column(TypeName = "int")]
        public int Hood { get; set; }
        [Required]
        [Column(TypeName = "int")]
        public int ShowBody { get; set; }
        [Required]
        [Column(TypeName = "int")]
        public int ShowHood { get; set; }
    }
}
