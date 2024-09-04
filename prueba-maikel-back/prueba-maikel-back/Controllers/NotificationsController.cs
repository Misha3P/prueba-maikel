using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using prueba_maikel_back.Models;

namespace prueba_maikel_back.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotificationsController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public NotificationsController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Notifications
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Notification>>> GetNotifications()
        {
            return await _context.Notifications.ToListAsync();
        }

        // GET: api/Notifications/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Notification>> GetNotification(int id)
        {
            var notification = await _context.Notifications.FindAsync(id);

            if (notification == null)
            {
                return NotFound();
            }

            return notification;
        }

        // PUT: api/Notifications
        [HttpPut]
        public async Task<IActionResult> PutNotification(NotificationDto notificationDto)
        {
            var notification = await _context.Notifications.FindAsync(notificationDto.NotificationId);
            if (notification == null)
            {
                return NotFound();
            }

            notification.Text = notificationDto.Text;
            notification.DateSent = notificationDto.DateSent;
            notification.UserId = notificationDto.UserId;
            notification.RelatedPostId = notificationDto.RelatedPostId;
            notification.RelatedCommentId = notificationDto.RelatedCommentId;

            _context.Entry(notification).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NotificationExists(notificationDto.NotificationId))
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

        // POST: api/Notifications
        [HttpPost]
        public async Task<ActionResult<Notification>> PostNotification(NotificationDto notificationDto)
        {
            var notification = new Notification
            {
                Text = notificationDto.Text,
                DateSent = notificationDto.DateSent,
                UserId = notificationDto.UserId,
                RelatedPostId = notificationDto.RelatedPostId,
                RelatedCommentId = notificationDto.RelatedCommentId
            };

            _context.Notifications.Add(notification);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetNotification), new { id = notification.NotificationId }, notification);
        }

        // DELETE: api/Notifications/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNotification(int id)
        {
            var notification = await _context.Notifications.FindAsync(id);
            if (notification == null)
            {
                return NotFound();
            }

            _context.Notifications.Remove(notification);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool NotificationExists(int id)
        {
            return _context.Notifications.Any(e => e.NotificationId == id);
        }
    }
}
