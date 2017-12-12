import { Component, OnInit } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { UserFormComponent } from '../user-form/user-form.component';
import { UsersService } from '../../shared/users.service';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(
    private modalService: NgbModal,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.users = this.usersService.users;
  }

  editUser(selectedUser) {
    const modalRef = this.modalService.open(UserFormComponent);
    modalRef.componentInstance.user = selectedUser ? selectedUser : this.usersService.defineUser({});

    modalRef
      .result
      .then((user) => {
        this.usersService.addUser(user);
      })
      .catch(() => {});
  }

  deleteUser(user: User) {
    this.usersService.deleteUser(user);
  }
}
