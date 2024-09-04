using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using prueba_maikel_back.Models;

namespace prueba_maikel_back.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FollowersController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public FollowersController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Followers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Follower>>> GetFollowers()
        {
            return await _context.Followers.ToListAsync();
        }

        // GET: api/Followers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Follower>> GetFollower(int id)
        {
            var follower = await _context.Followers.FindAsync(id);

            if (follower == null)
            {
                return NotFound();
            }

            return follower;
        }

        // PUT: api/Followers
        [HttpPut]
        public async Task<IActionResult> PutFollower(FollowerDto followerDto)
        {
            var follower = await _context.Followers.FindAsync(followerDto.FollowerId);
            if (follower == null)
            {
                return NotFound();
            }

            follower.UserId = followerDto.UserId;
            follower.FollowedUserId = followerDto.FollowedUserId;

            _context.Entry(follower).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FollowerExists(followerDto.FollowerId))
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

        // POST: api/Followers
        [HttpPost]
        public async Task<ActionResult<Follower>> PostFollower(FollowerDto followerDto)
        {
            var follower = new Follower
            {
                UserId = followerDto.UserId,
                FollowedUserId = followerDto.FollowedUserId
            };

            _context.Followers.Add(follower);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetFollower), new { id = follower.FollowerId }, follower);
        }

        // DELETE: api/Followers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFollower(int id)
        {
            var follower = await _context.Followers.FindAsync(id);
            if (follower == null)
            {
                return NotFound();
            }

            _context.Followers.Remove(follower);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool FollowerExists(int id)
        {
            return _context.Followers.Any(e => e.FollowerId == id);
        }
    }
}
