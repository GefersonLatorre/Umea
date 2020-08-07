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
    public class HoodController : ControllerBase
    {
        private readonly AppDbContext _context;

        public HoodController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Hood
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Hood>>> GetHoods()
        {
            return await _context.Hoods.ToListAsync();
        }
        
        // PUT: api/Hood/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutHood(int id, Hood hood)
        {
            if (id != hood.Id)
            {
                return BadRequest();
            }

            _context.Entry(hood).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HoodExists(id))
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

        // CLEAR: api/Hood/5
        [HttpDelete("{id}")]
        public bool Clear(int id)
        {
            List<Hood> hoods = _context.Hoods.ToList();

            foreach (var item in hoods)
            {
                if (item.Id != id)
                {
                    item.State = 0;
                    _context.Entry(item).State = EntityState.Modified;
                    _context.SaveChanges();
                }
            }

            return true;
        }

        private bool HoodExists(int id)
        {
            return _context.Hoods.Any(e => e.Id == id);
        }
    }
}
