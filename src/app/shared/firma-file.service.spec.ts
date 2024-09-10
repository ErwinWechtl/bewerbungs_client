import { TestBed } from '@angular/core/testing';

import { FirmaFileService } from './firma-file.service';

describe('FirmaFileService', () => {
  let service: FirmaFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirmaFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
