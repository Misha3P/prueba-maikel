// src/app/components/post-list/post-list.component.ts
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Post } from 'src/app/models/models';
import { PostService } from 'src/app/services/post.service';
import { PostFormComponent } from '../post-form/post-form.component';
import { PostDetailsComponent } from '../post-details/post-details.component';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    this.postService.getPosts().subscribe(posts => this.posts = posts);
  }

  openPostFormModal(postId?: number) {
    const modalRef = this.modalService.open(PostFormComponent);
    if (postId) {
      this.postService.getPostById(postId).subscribe(post => {
        modalRef.componentInstance.post = post;
        modalRef.componentInstance.isEditMode = true;
      });
    } else {
      modalRef.componentInstance.isEditMode = false;
    }
  }

  openPostDetailsModal(postId: number) {
    const modalRef = this.modalService.open(PostDetailsComponent);
    this.postService.getPostById(postId).subscribe(post => modalRef.componentInstance.post = post);
 
    modalRef.componentInstance.postUpdated.subscribe(() => {
      this.loadPosts(); // Recargar la lista de posts después de la actualización
    });
  }
}
