import { TestBed } from '@angular/core/testing';

import { FoodBoxUserServiceService } from './food-box-user-service.service';

describe('FoodBoxUserServiceService', () => {
  let service: FoodBoxUserServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodBoxUserServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
