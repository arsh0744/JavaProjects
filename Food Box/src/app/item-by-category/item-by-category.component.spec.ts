import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemByCategoryComponent } from './item-by-category.component';

describe('ItemByCategoryComponent', () => {
  let component: ItemByCategoryComponent;
  let fixture: ComponentFixture<ItemByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemByCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
