import { TestBed } from '@angular/core/testing';

import { LibVendorsService } from './lib-vendors.service';

describe('LibVendorsService', () => {
  let service: LibVendorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibVendorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
