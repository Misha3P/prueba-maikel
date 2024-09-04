-- Creación de la tabla User
CREATE TABLE [User] (
    UserId INT PRIMARY KEY IDENTITY(1,1),
    Username NVARCHAR(50) NOT NULL,
    Email NVARCHAR(100) NOT NULL,
    PasswordHash NVARCHAR(100) NOT NULL
)
-- Creación de la tabla Post
CREATE TABLE Post (
    PostId INT PRIMARY KEY IDENTITY(1,1),
    Title NVARCHAR(100) NOT NULL,
    Content NVARCHAR(MAX) NOT NULL,
    DatePublished DATETIME NOT NULL,
    UserId INT FOREIGN KEY REFERENCES [User](UserId)
)
-- Creación de la tabla Comment
CREATE TABLE Comment (
    CommentId INT PRIMARY KEY IDENTITY(1,1),
    Text NVARCHAR(500) NOT NULL,
    DatePosted DATETIME NOT NULL,
    UserId INT FOREIGN KEY REFERENCES [User](UserId),
    PostId INT FOREIGN KEY REFERENCES Post(PostId)
)
-- Creación de la tabla Follower
CREATE TABLE Follower (
    FollowerId INT PRIMARY KEY IDENTITY(1,1),
    UserId INT FOREIGN KEY REFERENCES [User](UserId),
    FollowedUserId INT FOREIGN KEY REFERENCES [User](UserId)
)
-- Creación de la tabla Notification
CREATE TABLE Notification (
    NotificationId INT PRIMARY KEY IDENTITY(1,1),
    Text NVARCHAR(200) NOT NULL,
    DateSent DATETIME NOT NULL,
    UserId INT FOREIGN KEY REFERENCES [User](UserId),
    RelatedPostId INT FOREIGN KEY REFERENCES Post(PostId),
    RelatedCommentId INT FOREIGN KEY REFERENCES Comment(CommentId)
)

-- Inserts para la tabla User
INSERT INTO [User] (Username, Email, PasswordHash)
VALUES
('user1', 'user1@example.com', 'hash1'),
('user2', 'user2@example.com', 'hash2'),
('user3', 'user3@example.com', 'hash3'),
('user4', 'user4@example.com', 'hash4'),
('user5', 'user5@example.com', 'hash5');
-- Inserts para la tabla Post
INSERT INTO Post (Title, Content, DatePublished, UserId)
VALUES
('My First Blog Post', 'This is the content of my first blog post.', '2023-04-01 10:30:00', 1),
('Exciting News!', 'I have some exciting news to share with you all.', '2023-04-05 15:20:00', 2),
('Tips for Productivity', 'In this post, I will share some tips to boost your productivity.', '2023-04-10 09:00:00', 1),
('Travelling Abroad', 'Last month I went on a trip abroad and had an amazing time.', '2023-04-15 19:45:00', 3),
('Book Review', 'I recently read a book that I think everyone should check out.', '2023-04-20 14:10:00', 4);
-- Inserts para la tabla Comment
INSERT INTO Comment (Text, DatePosted, UserId, PostId)
VALUES
('Great post! I really enjoyed reading it.', '2023-04-01 11:00:00', 2, 1),
('Thanks for sharing these productivity tips.', '2023-04-10 09:15:00', 3, 3),
('Looks like you had an amazing time abroad!', '2023-04-16 08:30:00', 1, 4),
('Ill have to check out that book. Thanks for the recommendation.', '2023-04-20 14:30:00', 4, 5),
('I cant wait to read more from you.', '2023-04-05 15:35:00', 3, 2);
-- Inserts para la tabla Follower
INSERT INTO Follower (UserId, FollowedUserId)
VALUES
(1, 2),
(1, 3),
(2, 1),
(3, 1),
(4, 1),
(4, 2),
(5, 1),
(5, 3);
-- Inserts para la tabla Notification
INSERT INTO Notification (Text, DateSent, UserId, RelatedPostId, RelatedCommentId)
VALUES
('User2 commented on your post.', '2023-04-01 11:05:00', 1, 1, 1),
('User3 followed you.', '2023-04-10 09:20:00', 1, NULL, NULL),
('User1 commented on your post.', '2023-04-16 08:35:00', 4, 4, 3),
('User4 followed you.', '2023-04-20 14:35:00', 1, NULL, NULL),
('User5 commented on your post.', '2023-04-05 15:40:00', 2, 2, 5);