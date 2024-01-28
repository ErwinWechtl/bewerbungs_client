import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFirmaComponent } from './edit-firma.component';

describe('EditFirmaComponent', () => {
  let component: EditFirmaComponent;
  let fixture: ComponentFixture<EditFirmaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditFirmaComponent]
    });
    fixture = TestBed.createComponent(EditFirmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
