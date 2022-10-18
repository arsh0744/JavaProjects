import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSegmentComponent } from './admin-segment.component';

describe('AdminSegmentComponent', () => {
  let component: AdminSegmentComponent;
  let fixture: ComponentFixture<AdminSegmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSegmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
