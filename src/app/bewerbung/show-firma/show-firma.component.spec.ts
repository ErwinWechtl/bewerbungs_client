import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFirmaComponent } from './show-firma.component';

describe('ShowFirmaComponent', () => {
  let component: ShowFirmaComponent;
  let fixture: ComponentFixture<ShowFirmaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowFirmaComponent]
    });
    fixture = TestBed.createComponent(ShowFirmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
