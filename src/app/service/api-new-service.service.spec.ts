import { TestBed } from '@angular/core/testing';

import { ApiNewServiceService } from './api-new-service.service';

describe('ApiNewServiceService', () => {
  let service: ApiNewServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiNewServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
