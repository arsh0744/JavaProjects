import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodboxCartComponent } from './foodbox-cart.component';

describe('FoodboxCartComponent', () => {
  let component: FoodboxCartComponent;
  let fixture: ComponentFixture<FoodboxCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodboxCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodboxCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
