import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { gitRoutes } from './git-users.routes';
import { GitReposComponent } from './git-repos/git-repos.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(gitRoutes),
  ],
  declarations: [
    GitReposComponent
  ]
})
export class GitUsersModule {  }
