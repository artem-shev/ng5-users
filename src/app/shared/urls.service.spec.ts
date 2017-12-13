import { TestBed, inject } from '@angular/core/testing';

import { UrlsService } from './urls.service';

describe('UrlsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UrlsService]
    });
  });

  it('should be created', inject([UrlsService], (service: UrlsService) => {
    expect(service).toBeTruthy();
  }));

  it('should return url for users', inject([UrlsService], (service: UrlsService) => {
    const login = 'artem-shev';
    const result = `//api.github.com/search/users?q=artem-shev`;

    expect(service.githubURLS.users(login)).toEqual(result);
  }));
});
