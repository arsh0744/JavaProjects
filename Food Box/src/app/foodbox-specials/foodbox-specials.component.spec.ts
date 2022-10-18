import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodboxSpecialsComponent } from './foodbox-specials.component';

describe('FoodboxSpecialsComponent', () => {
  let component: FoodboxSpecialsComponent;
  let fixture: ComponentFixture<FoodboxSpecialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodboxSpecialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodboxSpecialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
