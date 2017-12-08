import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { appRoutes } from './app.routes';

import { UrlsService } from './shared/urls.service';
import { GitConnectorService } from './shared/git-connector.service';
import { UsersService } from './shared/users.service';

import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { GitReposComponent } from './components/git-repos/git-repos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserRowComponent } from './components/user-row/user-row.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailsComponent,
    GitReposComponent,
    NavbarComponent,
    UserFormComponent,
    UserRowComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UrlsService,
    GitConnectorService,
    UsersService
  ],
  entryComponents: [
    UserFormComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
