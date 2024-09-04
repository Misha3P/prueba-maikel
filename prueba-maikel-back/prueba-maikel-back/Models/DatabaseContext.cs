using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace prueba_maikel_back.Models;

public partial class DatabaseContext : DbContext
{
    public DatabaseContext()
    {
    }

    public DatabaseContext(DbContextOptions<DatabaseContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Comment> Comments { get; set; }

    public virtual DbSet<Follower> Followers { get; set; }

    public virtual DbSet<Notification> Notifications { get; set; }

    public virtual DbSet<Post> Posts { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=localhost,1437;Database=master;User Id=sa;Password=Pass12345;TrustServerCertificate=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Comment>(entity =>
        {
            entity.HasKey(e => e.CommentId).HasName("PK__Comment__C3B4DFCA63DDC0D3");

            entity.ToTable("Comment");

            entity.Property(e => e.DatePosted).HasColumnType("datetime");
            entity.Property(e => e.Text).HasMaxLength(500);

            entity.HasOne(d => d.Post).WithMany(p => p.Comments)
                .HasForeignKey(d => d.PostId)
                .HasConstraintName("FK__Comment__PostId__1C1D2798");

            entity.HasOne(d => d.User).WithMany(p => p.Comments)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK__Comment__UserId__1B29035F");
        });

        modelBuilder.Entity<Follower>(entity =>
        {
            entity.HasKey(e => e.FollowerId).HasName("PK__Follower__E859401928E5F4B8");

            entity.ToTable("Follower");

            entity.HasOne(d => d.FollowedUser).WithMany(p => p.FollowerFollowedUsers)
                .HasForeignKey(d => d.FollowedUserId)
                .HasConstraintName("FK__Follower__Follow__1FEDB87C");

            entity.HasOne(d => d.User).WithMany(p => p.FollowerUsers)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK__Follower__UserId__1EF99443");
        });

        modelBuilder.Entity<Notification>(entity =>
        {
            entity.HasKey(e => e.NotificationId).HasName("PK__Notifica__20CF2E12B1FD1BEC");

            entity.ToTable("Notification");

            entity.Property(e => e.DateSent).HasColumnType("datetime");
            entity.Property(e => e.Text).HasMaxLength(200);

            entity.HasOne(d => d.RelatedComment).WithMany(p => p.Notifications)
                .HasForeignKey(d => d.RelatedCommentId)
                .HasConstraintName("FK__Notificat__Relat__24B26D99");

            entity.HasOne(d => d.RelatedPost).WithMany(p => p.Notifications)
                .HasForeignKey(d => d.RelatedPostId)
                .HasConstraintName("FK__Notificat__Relat__23BE4960");

            entity.HasOne(d => d.User).WithMany(p => p.Notifications)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK__Notificat__UserI__22CA2527");
        });

        modelBuilder.Entity<Post>(entity =>
        {
            entity.HasKey(e => e.PostId).HasName("PK__Post__AA126018171BBFBA");

            entity.ToTable("Post");

            entity.Property(e => e.DatePublished).HasColumnType("datetime");
            entity.Property(e => e.Title).HasMaxLength(100);

            entity.HasOne(d => d.User).WithMany(p => p.Posts)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK__Post__UserId__184C96B4");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.UserId).HasName("PK__User__1788CC4C32056135");

            entity.ToTable("User");

            entity.Property(e => e.Email).HasMaxLength(100);
            entity.Property(e => e.PasswordHash).HasMaxLength(100);
            entity.Property(e => e.Username).HasMaxLength(50);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
