import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { UrlsService } from '../../shared/urls.service';
import { GitConnectorService } from '../../shared/git-connector.service';
import { UsersService } from '../../shared/users.service';
import { GitReposComponent } from './git-repos.component';

describe('GitReposComponent', () => {
  let component: GitReposComponent;
  let fixture: ComponentFixture<GitReposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule,
      ],
      declarations: [ GitReposComponent ],
      providers: [
        UrlsService,
        GitConnectorService,
        UsersService
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
