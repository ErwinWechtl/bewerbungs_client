import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBewerbungComponent } from './list-bewerbung.component';

describe('ShowBewerbungComponent', () => {
  let component: ListBewerbungComponent;
  let fixture: ComponentFixture<ListBewerbungComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListBewerbungComponent]
    });
    fixture = TestBed.createComponent(ListBewerbungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
