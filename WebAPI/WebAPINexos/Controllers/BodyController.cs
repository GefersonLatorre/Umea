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
    public class BodyController : ControllerBase
    {
        private readonly AppDbContext _context;

        public BodyController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Body
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Body>>> GetBodies()
        {
            return await _context.Bodies.ToListAsync();
        }
        
        // PUT: api/Body/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBody(int id, Body body)
        {
            if (id != body.Id)
            {
                return BadRequest();
            }

            _context.Entry(body).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BodyExists(id))
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

        // CLEAR: api/Body/5
        [HttpDelete("{id}")]
        public bool Clear(int id)
        {
            List<Body> bodies = _context.Bodies.ToList();

            foreach (var item in bodies)
            { 
                if(item.Id != id)
                {
                    item.State = 0;
                    _context.Entry(item).State = EntityState.Modified;
                    _context.SaveChanges();
                }                
            }

            return true;
        }

        private bool BodyExists(int id)
        {
            return _context.Bodies.Any(e => e.Id == id);
        }
    }
}
