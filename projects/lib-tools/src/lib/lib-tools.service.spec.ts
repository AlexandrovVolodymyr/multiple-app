import { TestBed } from '@angular/core/testing';

import { LibToolsService } from './lib-tools.service';

describe('LibToolsService', () => {
  let service: LibToolsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibToolsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
