import { TestBed, inject } from '@angular/core/testing';

import { HttpConnectorService } from './http-connector.service';

describe('HttpConnectorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpConnectorService]
    });
  });

  it('should be created', inject([HttpConnectorService], (service: HttpConnectorService) => {
    expect(service).toBeTruthy();
  }));
});
