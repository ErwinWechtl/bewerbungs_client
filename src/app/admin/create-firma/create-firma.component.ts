import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Firma } from 'src/app/shared/firma';
import { FirmaService } from 'src/app/shared/firma.service';

@Component({
  selector: 'we-create-firma',
  templateUrl: './create-firma.component.html',
  styleUrls: ['./create-firma.component.css']
})
export class CreateFirmaComponent {

  firma: Firma = {
    id: '',
    name: ''
  }

  @Output() submitFirma = new EventEmitter<Firma>();

  constructor(private firmaService: FirmaService, private router: Router) { }

  submitForm(firma: Firma) {
    this.firmaService.create(firma).subscribe(createdFirma => {
      this.router.navigateByUrl("/bewerbung/list-firma");
     });
  }

}
