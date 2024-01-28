import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFirmaComponent } from './create-firma.component';

describe('CreateFirmaComponent', () => {
  let component: CreateFirmaComponent;
  let fixture: ComponentFixture<CreateFirmaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateFirmaComponent]
    });
    fixture = TestBed.createComponent(CreateFirmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
