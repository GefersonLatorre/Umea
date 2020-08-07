using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPINexos.Contexts;
using WebAPINexos.Models;

namespace WebAPINexos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ColorController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ColorController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Color
        [HttpGet("{colorBody}/{colorHood}/{colors}")]
        public async Task<ActionResult<IEnumerable<Color>>> GetColors(int colorBody, int colorHood, int colors)
        {
            if (colors == 0)
            {
                if (colorBody == 0)
                {
                    return await _context.Colors.Where(c => c.ShowHood == colorHood).ToListAsync();
                }
                else
                {
                    return await _context.Colors.Where(c => c.ShowBody == colorBody).ToListAsync();
                }
            }
            else
            {
                return await _context.Colors.Where(c => c.Id != colors).ToListAsync();
            }
        }

        // PUT: api/Color/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutColor(int id, Color color)
        {
            if (id != color.Id)
            {
                return BadRequest();
            }

            _context.Entry(color).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ColorExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // CLEAR: api/Color/5
        [HttpDelete("{idB}/{idH}")]
        public bool Clear(int idB, int idH)
        {
            List<Color> colors = _context.Colors.ToList();

            foreach (var item in colors)
            {
                if (item.Id != idB && item.Id != idH)
                {
                    item.Body = 0;
                    item.Hood = 0;
                    _context.Entry(item).State = EntityState.Modified;
                    _context.SaveChanges();
                }                
            }

            return true;
        }

        private bool ColorExists(int id)
        {
            return _context.Colors.Any(e => e.Id == id);
        }
    }
}
