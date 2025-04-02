import { TestBed } from '@angular/core/testing';

import { AdminWebServiceService } from './admin-web-service.service';

describe('AdminWebServiceService', () => {
  let service: AdminWebServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminWebServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
