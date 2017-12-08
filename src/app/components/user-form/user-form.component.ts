import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UsersService } from '../../shared/users.service';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @Input() user: User;

  title: string;
  userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
    // another way to build reactive form in Angular
    // this.userForm = new FormGroup({
    //   firstName: new FormControl(this.user.firstName),
    //   lastName: new FormControl(this.user.lastName),
    //   description: new FormControl(this.user.description)
    // });
    this.title = this.user.id ? 'Edit user' : 'Create user';

    this.userForm = this.formBuilder.group({
      firstName: [this.user.firstName, [Validators.required, Validators.minLength(5)]],
      lastName: [this.user.lastName, Validators.required],
      description: [this.user.description]
    });
  }

  submitUser(form) {
    console.log('form', form);
    if (this.user.id) {
      form.value.id = this.user.id;
    }
    console.log('form.value', form.value);

    const editedUser = this.usersService.defineUser(form.value);
    this.activeModal.close(editedUser);
  }
}
