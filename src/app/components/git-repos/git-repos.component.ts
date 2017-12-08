import { Component, OnInit } from '@angular/core';

import { GitConnectorService } from '../../shared/git-connector.service';
import { GitUser, UsersResponse } from '../../shared/models/git-responses.model';

@Component({
  selector: 'app-git-repos',
  templateUrl: './git-repos.component.html',
  styleUrls: ['./git-repos.component.scss']
})
export class GitReposComponent implements OnInit {
  users: GitUser[] = [];
  usersQuery = 'artem-shev';

  constructor(
    private gitConnector: GitConnectorService
  ) { }

  ngOnInit() {  }

  getRepos(usersQuery: string) {
    this.gitConnector.getUsers(usersQuery)
      .subscribe((response: UsersResponse) => {
        this.users = response.items;
        console.log('res', response);
      });
  }

  showUserDetails(user: GitUser) {
    console.log('user', user);
  }

  logChanges(changes, form) {
    console.log('changes', changes);
    console.log('form', form);
  }
}
