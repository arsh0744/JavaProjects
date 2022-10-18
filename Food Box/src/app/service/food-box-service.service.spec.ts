import { TestBed } from '@angular/core/testing';

import { FoodBoxServiceService } from './food-box-service.service';

describe('FoodBoxServiceService', () => {
  let service: FoodBoxServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodBoxServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
