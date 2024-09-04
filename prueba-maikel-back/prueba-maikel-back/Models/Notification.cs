using System;
using System.Collections.Generic;

namespace prueba_maikel_back.Models;

public partial class Notification
{
    public int NotificationId { get; set; }

    public string Text { get; set; } = null!;

    public DateTime DateSent { get; set; }

    public int? UserId { get; set; }

    public int? RelatedPostId { get; set; }

    public int? RelatedCommentId { get; set; }

    public virtual Comment? RelatedComment { get; set; }

    public virtual Post? RelatedPost { get; set; }

    public virtual User? User { get; set; }
}
public class NotificationDto
{
    public int NotificationId { get; set; }
    public string Text { get; set; } = null!;
    public DateTime DateSent { get; set; }
    public int? UserId { get; set; }
    public int? RelatedPostId { get; set; }
    public int? RelatedCommentId { get; set; }
}
