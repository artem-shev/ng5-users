import { Component, OnInit } from '@angular/core';

import { GitConnectorService } from '../../shared/git-connector.service';
import { GitUser, UsersResponse } from '../../shared/models/git-responses.model';
import { User, GitParams } from '../../shared/models/user.model';
import { UsersService } from '../../shared/users.service';

@Component({
  selector: 'app-git-repos',
  templateUrl: './git-repos.component.html',
  styleUrls: ['./git-repos.component.scss']
})
export class GitReposComponent implements OnInit {
  users: GitUser[] = [];
  systemUsers: User[]= [];
  usersQuery = 'artem-shev';

  constructor(
    private gitConnector: GitConnectorService,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.systemUsers = this.usersService.users;
    console.log('this.systetemUsers', this.systemUsers);
  }

  getRepos(usersQuery: string) {
    this.gitConnector.getUsers(usersQuery)
      .subscribe((response: UsersResponse) => {
        this.users = response.items.map(user => {
          const systemUser = this.usersService.getUserByGitId(user.id);
          console.log('systemUser', systemUser);
          user.systemUser = systemUser;
          return user;
        });
        console.log('res', response);
      });
  }

  toggleEditMode(user: GitUser) {
    user.inEdit = !user.inEdit;
  }

  onSystemUserSelect(user: User, gitUser: GitUser) {
    this.usersService.connectUserToGitAccount(user, gitUser);
  }

  showUserDetails(user: GitUser) {
    console.log('user', user);
  }

  logChanges(changes, form) {
    console.log('changes', changes);
    console.log('form', form);
  }
}
