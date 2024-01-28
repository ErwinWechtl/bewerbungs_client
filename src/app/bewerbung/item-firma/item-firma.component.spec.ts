import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFirmaComponent } from './item-firma.component';

describe('ItemFirmaComponent', () => {
  let component: ItemFirmaComponent;
  let fixture: ComponentFixture<ItemFirmaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemFirmaComponent]
    });
    fixture = TestBed.createComponent(ItemFirmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
