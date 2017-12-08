import { Routes } from '@angular/router';

import { UserListComponent } from './components/user-list/user-list.component';
import { GitReposComponent } from './components/git-repos/git-repos.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

export const appRoutes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'users/:id', component: UserDetailsComponent },
  { path: 'git', component: GitReposComponent },
  { path: '', redirectTo: 'users', pathMatch: 'full' },
];
