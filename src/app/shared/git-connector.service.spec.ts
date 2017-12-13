import { TestBed, inject } from '@angular/core/testing';

import { GitConnectorService } from './git-connector.service';
import { HttpClientModule } from '@angular/common/http';
import { UrlsService } from './urls.service';

describe('GitConnectorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        GitConnectorService,
        UrlsService
      ]
    });
  });

  it('should be created', inject([GitConnectorService], (service: GitConnectorService) => {
    expect(service).toBeTruthy();
  }));
});
