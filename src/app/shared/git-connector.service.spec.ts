import { TestBed, inject } from '@angular/core/testing';

import { GitConnectorService } from './git-connector.service';

describe('GitConnectorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitConnectorService]
    });
  });

  it('should be created', inject([GitConnectorService], (service: GitConnectorService) => {
    expect(service).toBeTruthy();
  }));
});
