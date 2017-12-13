import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from '../../app.routes';
import { UserListComponent } from '../../system-users/user-list/user-list.component';
import { UserDetailsComponent } from '../../system-users/user-details/user-details.component';
import { UserRowComponent } from '../../system-users/user-row/user-row.component';
import { APP_BASE_HREF } from '@angular/common';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot(appRoutes)
      ],
      declarations: [
        NavbarComponent,
        UserListComponent,
        UserDetailsComponent,
        UserRowComponent
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
