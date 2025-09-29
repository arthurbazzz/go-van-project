import { TestBed } from '@angular/core/testing';

import { ApiGoVanService } from './api-go-van.service';

describe('ApiGoVanService', () => {
  let service: ApiGoVanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiGoVanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
