import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBewerbungComponent } from './show-bewerbung.component';

describe('ShowBewerbungComponent', () => {
  let component: ShowBewerbungComponent;
  let fixture: ComponentFixture<ShowBewerbungComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowBewerbungComponent]
    });
    fixture = TestBed.createComponent(ShowBewerbungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
