import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserRowComponent } from './user-row/user-row.component';
import { UserFormComponent } from './user-form/user-form.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [
    UserListComponent,
    UserRowComponent,
    UserDetailsComponent,
    UserFormComponent
  ],
  entryComponents: [
    UserFormComponent
  ]
})
export class SystemUsersModule {  }
