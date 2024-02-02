import { Component } from '@angular/core';
import { Bewerbung } from 'src/app/shared/bewerbung';

@Component({
  selector: 'we-form-bewerbung',
  templateUrl: './form-bewerbung.component.html',
  styleUrls: ['./form-bewerbung.component.css']
})
export class FormBewerbungComponent {
  bewerbung: Bewerbung = {
    id: '',
    sentTo: '',
  }

}
