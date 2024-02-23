import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Firma } from 'src/app/shared/firma';

@Component({
  selector: 'we-form-firma',
  templateUrl: './form-firma.component.html',
  styleUrls: ['./form-firma.component.css']
})
export class FormFirmaComponent {

  @Output() submitFirma = new EventEmitter<Firma>();

  form = new FormGroup({
    id: new FormControl('', {nonNullable: true}),
    name: new FormControl('', {nonNullable: true, validators: Validators.required}),
    webseite: new FormControl('', {nonNullable: true}),
    ansprechPartner: new FormControl('', {nonNullable: true}),
    email: new FormControl('', {nonNullable: true}),
    sonstiges: new FormControl('', {nonNullable: true}),
  })

  submitForm() {
    this.submitFirma.emit(this.form.getRawValue());
  }

}
