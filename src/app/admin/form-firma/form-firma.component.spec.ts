import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFirmaComponent } from './form-firma.component';

describe('FormFirmaComponent', () => {
  let component: FormFirmaComponent;
  let fixture: ComponentFixture<FormFirmaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormFirmaComponent]
    });
    fixture = TestBed.createComponent(FormFirmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
