import { TestBed } from '@angular/core/testing';

import { LibViewsService } from './lib-views.service';

describe('LibViewsService', () => {
  let service: LibViewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibViewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
