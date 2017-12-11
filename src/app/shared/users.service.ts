import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { User, GitParams } from './models/user.model';
import { GitUser } from './models/git-responses.model';

@Injectable()
export class UsersService {
  users: User[] = [];
  lsUsersKey = 'system-users';

  constructor() {
    this.getUsersFromLS();
  }

  defineUser(params: any) {
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

  getUserByGitId(id) {
    return this.users.find(user => user.git ? user.git.id === id : false);
  }

  connectUserToGitAccount(user: User, gitUser: GitUser) {
    user.git = new GitParams(gitUser);
    this.saveUsersToLS();
    console.log('user', user);
  }
}
