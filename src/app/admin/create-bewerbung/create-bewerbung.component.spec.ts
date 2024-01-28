import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBewerbungComponent } from './create-bewerbung.component';

describe('CreateBewerbungComponent', () => {
  let component: CreateBewerbungComponent;
  let fixture: ComponentFixture<CreateBewerbungComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateBewerbungComponent]
    });
    fixture = TestBed.createComponent(CreateBewerbungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
