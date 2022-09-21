import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnacksSegmentComponent } from './snacks-segment.component';

describe('SnacksSegmentComponent', () => {
  let component: SnacksSegmentComponent;
  let fixture: ComponentFixture<SnacksSegmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnacksSegmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnacksSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
