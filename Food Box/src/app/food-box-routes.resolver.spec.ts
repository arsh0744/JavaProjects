import { TestBed } from '@angular/core/testing';

import { FoodBoxRoutesResolver } from './food-box-routes.resolver';

describe('FoodBoxRoutesResolver', () => {
  let resolver: FoodBoxRoutesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(FoodBoxRoutesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
