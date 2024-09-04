// src/app/components/post-details/post-details.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Post } from 'src/app/models/models';
import { PostService } from 'src/app/services/post.service';
import { PostFormComponent } from '../post-form/post-form.component';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html'
})
export class PostDetailsComponent {
  @Input() post?: Post;
  @Output() postUpdated = new EventEmitter<void>(); // Emitirá un evento cuando se actualice el post

  constructor(public activeModal: NgbActiveModal, private postService: PostService, private modalService: NgbModal) {}

  editPost() {
    if (this.post) {
      const modalRef = this.modalService.open(PostFormComponent);
      modalRef.componentInstance.post = this.post;
      modalRef.componentInstance.isEditMode = true;

      // Escucha el cierre del modal de edición
      modalRef.closed.subscribe(() => {
        this.postUpdated.emit(); // Emitir el evento cuando se cierra el modal de edición
      });

      this.activeModal.dismiss('Edit click');
    }
  }

  deletePost() {
    if (this.post && this.post.postId) {
      this.postService.deletePost(this.post.postId).subscribe(() => {
        this.activeModal.close('Post deleted');
        this.postUpdated.emit(); // Emitir evento después de la eliminación
        alert('Post eliminado exitosamente.');
      });
    }
  }
}
