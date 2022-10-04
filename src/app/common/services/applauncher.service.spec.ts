import { TestBed } from '@angular/core/testing';

import { ApplauncherService } from './applauncher.service';

describe('ApplauncherService', () => {
  let service: ApplauncherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplauncherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
