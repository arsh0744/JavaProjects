import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodBoxItemsComponent } from './food-box-items.component';

describe('FoodBoxItemsComponent', () => {
  let component: FoodBoxItemsComponent;
  let fixture: ComponentFixture<FoodBoxItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodBoxItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodBoxItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
