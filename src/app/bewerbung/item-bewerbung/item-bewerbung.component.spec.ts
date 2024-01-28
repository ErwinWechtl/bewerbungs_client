import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemBewerbungComponent } from './item-bewerbung.component';

describe('ItemBewerbungComponent', () => {
  let component: ItemBewerbungComponent;
  let fixture: ComponentFixture<ItemBewerbungComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemBewerbungComponent]
    });
    fixture = TestBed.createComponent(ItemBewerbungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
