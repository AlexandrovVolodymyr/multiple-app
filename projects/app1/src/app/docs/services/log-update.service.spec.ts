import { TestBed } from '@angular/core/testing';

import { LogUpdateService } from 'projects/app1/src/app/docs/services/log-update.service';

describe('LogUpdateService', () => {
  let service: LogUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
