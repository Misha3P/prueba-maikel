import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/models/models';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html'
})
export class UserFormComponent {
  @Input() user!: User;
  @Input() isEditMode: boolean = false; // Ensure isEditMode has a default value

  constructor(public activeModal: NgbActiveModal, private userService: UserService) {}

  saveUser() {
    if (this.isEditMode && this.user) {
      this.userService.updateUser(this.user).subscribe(() => {
        this.activeModal.close('User updated');
      });
    } else if (this.user) {
      this.userService.createUser(this.user).subscribe(() => {
        this.activeModal.close('User created');
      });
    }
  }
}
