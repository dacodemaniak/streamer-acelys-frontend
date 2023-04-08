import { TestBed } from '@angular/core/testing';

import { ConceptorGuard } from './conceptor.guard';

describe('ConceptorGuard', () => {
  let guard: ConceptorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ConceptorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
