﻿using System;
using System.Collections.Generic;

namespace prueba_maikel_back.Models;

public partial class Comment
{
    public int CommentId { get; set; }

    public string Text { get; set; } = null!;

    public DateTime DatePosted { get; set; }

    public int? UserId { get; set; }

    public int? PostId { get; set; }

    public virtual ICollection<Notification> Notifications { get; set; } = new List<Notification>();

    public virtual Post? Post { get; set; }

    public virtual User? User { get; set; }
}
public class CommentDto
{
    public int CommentId { get; set; }
    public string Text { get; set; } = null!;
    public DateTime DatePosted { get; set; }
    public int? UserId { get; set; }
    public int? PostId { get; set; }
}
