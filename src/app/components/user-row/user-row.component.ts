import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { User } from '../../shared/models/user.model';
@Component({
  selector: '[app-user-row]',
  templateUrl: './user-row.component.html',
  styleUrls: ['./user-row.component.scss']
})
export class UserRowComponent implements OnInit {
  @Input() user: User;

  @Output() editUser = new EventEmitter();
  @Output() viewDetails = new EventEmitter();
  @Output() deleteUser = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log('this.user', this.user);
  }

  delete() {
    this.deleteUser.emit(this.user);
  }

  view() {
    this.viewDetails.emit(this.user);
  }
}
