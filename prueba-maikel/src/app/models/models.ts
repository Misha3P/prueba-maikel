// export interface para la tabla User
export interface User {
    userId: number;
    username: string;
    email: string;
    passwordHash: string;
}

// export interface para la tabla Post
export interface Post {
    postId: number;
    title: string;
    content: string;
    datePublished: Date;
    userId: number; // Foreign Key a User
}

// export interface para la tabla Comment
export interface Comment {
    commentId: number;
    text: string;
    datePosted: Date;
    userId: number; // Foreign Key a User
    postId: number; // Foreign Key a Post
}

// export interface para la tabla Follower
export interface Follower {
    followerId: number;
    userId: number; // Foreign Key a User (follower)
    followedUserId: number; // Foreign Key a User (followed user)
}

// export interface para la tabla Notification
export interface Notification {
    notificationId: number;
    text: string;
    dateSent: Date;
    userId: number; // Foreign Key a User
    relatedPostId?: number; // Foreign Key opcional a Post
    relatedCommentId?: number; // Foreign Key opcional a Comment
}
