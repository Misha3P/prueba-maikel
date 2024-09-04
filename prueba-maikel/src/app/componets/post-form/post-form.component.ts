// src/app/components/post-form/post-form.component.ts
import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Post } from 'src/app/models/models';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html'
})
export class PostFormComponent {
  @Input() post!: Post;
  @Input() isEditMode: boolean = false; // Ensure isEditMode has a default value

  constructor(public activeModal: NgbActiveModal, private postService: PostService) {}

  savePost() {
    if (this.isEditMode && this.post) {
      this.postService.updatePost(this.post).subscribe(() => {
        this.activeModal.close('Post updated');
      });
    } else if (this.post) {
      this.postService.createPost(this.post).subscribe(() => {
        this.activeModal.close('Post created');
      });
    }
  }
}
