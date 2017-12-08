import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { User } from './models/user.model';

@Injectable()
export class UsersService {
  users: User[] = [];
  lsUsersKey = 'system-users';

  constructor() {
    this.getUsersFromLS();
  }

  defineUser(params: Object) {
    return new User(params);
  }

  saveUsersToLS() {
    const users = JSON.stringify(this.users);
    localStorage.setItem(this.lsUsersKey, users);
  }

  getUsersFromLS() {
    const usersString = localStorage.getItem(this.lsUsersKey);
    if (usersString) {
      const users = JSON.parse(usersString);
      this.users = users.map(user => new User(user));
    }
  }

  addUser(user: User) {
    if (user.id) {
      this.users = this.users.map(existedUser => existedUser.id === user.id ? user : existedUser);
    } else {
      user.id = Date.now();
      this.users.push(user);
    }

    this.saveUsersToLS();
  }

  deleteUser(user: User) {
    const index = this.users.findIndex(existedUser => existedUser === user);
    this.users.splice(index, 1);
    this.saveUsersToLS();
  }
}
