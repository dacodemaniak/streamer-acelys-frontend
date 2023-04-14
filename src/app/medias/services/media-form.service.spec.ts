import { TestBed } from '@angular/core/testing';

import { MediaFormService } from './media-form.service';

describe('MediaFormService', () => {
  let service: MediaFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediaFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
