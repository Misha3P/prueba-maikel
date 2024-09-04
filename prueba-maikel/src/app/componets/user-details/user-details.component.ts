import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/models/models';
import { UserService } from 'src/app/services/user.service';
import { UserFormComponent } from '../user-form/user-form.component';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html'
})
export class UserDetailsComponent {
  @Input() user?: User;
  @Output() userUpdated = new EventEmitter<void>(); // Emitirá un evento cuando se actualice el usuario

  constructor(public activeModal: NgbActiveModal, private userService: UserService, private modalService: NgbModal) {}

  editUser() {
    if (this.user) {
      const modalRef = this.modalService.open(UserFormComponent);
      modalRef.componentInstance.user = this.user;
      modalRef.componentInstance.isEditMode = true;

      // Escucha el cierre del modal de edición
      modalRef.closed.subscribe(() => {
        this.userUpdated.emit(); // Emitir el evento cuando se cierra el modal de edición
      });

      this.activeModal.dismiss('Edit click');
    }
  }

  deleteUser() {
    if (this.user && this.user.userId) {
      this.userService.deleteUser(this.user.userId).subscribe(() => {
        this.activeModal.close('User deleted');
        this.userUpdated.emit(); // Emitir evento después de la eliminación
        alert('Usuario eliminado exitosamente.');
      });
    }
  }
}
