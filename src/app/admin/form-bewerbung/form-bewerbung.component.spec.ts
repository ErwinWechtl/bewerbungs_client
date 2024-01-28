import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBewerbungComponent } from './form-bewerbung.component';

describe('FormBewerbungComponent', () => {
  let component: FormBewerbungComponent;
  let fixture: ComponentFixture<FormBewerbungComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormBewerbungComponent]
    });
    fixture = TestBed.createComponent(FormBewerbungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
