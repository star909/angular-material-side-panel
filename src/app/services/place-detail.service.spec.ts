import { TestBed } from '@angular/core/testing';

import { PlaceDetailService } from './place-detail.service';

describe('PlaceDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlaceDetailService = TestBed.get(PlaceDetailService);
    expect(service).toBeTruthy();
  });
});
