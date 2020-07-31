import { TestBed } from '@angular/core/testing';

import { IsListService } from './is-list.service';

describe('IsListService', () => {
  let service: IsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
