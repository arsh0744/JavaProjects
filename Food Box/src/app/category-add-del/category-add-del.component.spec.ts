import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryAddDelComponent } from './category-add-del.component';

describe('CategoryAddDelComponent', () => {
  let component: CategoryAddDelComponent;
  let fixture: ComponentFixture<CategoryAddDelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryAddDelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryAddDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
