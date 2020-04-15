import { TestBed } from '@angular/core/testing';

import { CommonIconsService } from './common-icons.service';

describe('CommonIconsService', () => {
  let service: CommonIconsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonIconsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
