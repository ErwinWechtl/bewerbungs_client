import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListFirmaComponent } from './list-firma.component';


describe('ListFirmaComponent', () => {
  let component: ListFirmaComponent;
  let fixture: ComponentFixture<ListFirmaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListFirmaComponent]
    });
    fixture = TestBed.createComponent(ListFirmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
