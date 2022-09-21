import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaCoffeeSegmentComponent } from './tea-coffee-segment.component';

describe('TeaCoffeeSegmentComponent', () => {
  let component: TeaCoffeeSegmentComponent;
  let fixture: ComponentFixture<TeaCoffeeSegmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeaCoffeeSegmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeaCoffeeSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
