import { Routes } from '@angular/router';

import { UserListComponent } from './system-users/user-list/user-list.component';
import { UserDetailsComponent } from './system-users/user-details/user-details.component';
import { GitReposComponent } from './git-users/git-repos/git-repos.component';

export const appRoutes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'users/:id', component: UserDetailsComponent },
  { path: 'git', loadChildren: 'app/git-users/git-users.module#GitUsersModule' },
  { path: '', redirectTo: 'users', pathMatch: 'full' },
];
