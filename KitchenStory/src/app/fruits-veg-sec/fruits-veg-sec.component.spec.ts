import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitsVegSecComponent } from './fruits-veg-sec.component';

describe('FruitsVegSecComponent', () => {
  let component: FruitsVegSecComponent;
  let fixture: ComponentFixture<FruitsVegSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FruitsVegSecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitsVegSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
