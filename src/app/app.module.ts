import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SystemUsersModule } from './system-users/system-users.module';

import { appRoutes } from './app.routes';

import { UrlsService } from './shared/urls.service';
import { GitConnectorService } from './shared/git-connector.service';
import { UsersService } from './shared/users.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SystemUsersModule
  ],
  providers: [
    UrlsService,
    GitConnectorService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
