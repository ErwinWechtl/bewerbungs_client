import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBewerbungComponent } from './edit-bewerbung.component';

describe('EditBewerbungComponent', () => {
  let component: EditBewerbungComponent;
  let fixture: ComponentFixture<EditBewerbungComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditBewerbungComponent]
    });
    fixture = TestBed.createComponent(EditBewerbungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
