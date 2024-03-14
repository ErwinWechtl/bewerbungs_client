import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Bewerbung } from 'src/app/shared/bewerbung';

@Component({
  selector: 'we-form-bewerbung',
  templateUrl: './form-bewerbung.component.html',
  styleUrls: ['./form-bewerbung.component.css']
})
export class FormBewerbungComponent {
  // bewerbung: Bewerbung = {
  //   id: '',
  //   sentTo: '',
  //   letzterKontakt: '',
  //   status: 1
  // }

  @Output() submitBewerbung = new EventEmitter<Bewerbung>();
  @Input() bewerbung?: Bewerbung;

  form = new FormGroup({
    id: new FormControl('', {nonNullable: true}),
    sentto: new FormControl('', {nonNullable: true, validators: Validators.required}),
    ansprechPartner: new FormControl('', {nonNullable: true}),
    letzterKontakt: new FormControl('', {nonNullable: true, validators: Validators.required}),
    status: new FormControl(0, {nonNullable: true, validators: Validators.required}),
    anschreiben: new FormControl('', {nonNullable: true, validators: Validators.required}),
    sonstiges: new FormControl('', {nonNullable: true}),
  })

  submitForm() {
    this.submitBewerbung.emit(this.form.getRawValue());
  }

  ngOnChanges(): void {
    if (this.bewerbung) {
      this.setFormValues(this.bewerbung);
    }
  }

  private setFormValues(bewerbung: Bewerbung) {
    this.form.patchValue(bewerbung);
  }
 


}
