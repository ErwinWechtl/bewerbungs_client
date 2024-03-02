import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Bewerbung } from 'src/app/shared/bewerbung';
import { BewerbungService } from 'src/app/shared/bewerbung.service';

@Component({
  selector: 'we-create-bewerbung',
  templateUrl: './create-bewerbung.component.html',
  styleUrls: ['./create-bewerbung.component.css']
})
export class CreateBewerbungComponent {
  @Input() firmaId?: string;

  constructor(private bewerbungService: BewerbungService, private router: Router) { }

  create(bewerbung: Bewerbung) {
    alert("create bewerbung: " + bewerbung.sentto);
    this.bewerbungService.create(this.firmaId!, bewerbung).subscribe(createdBewerbung => {
      this.router.navigateByUrl("/bewerbung/show-firma/" + this.firmaId);
     });
  }

}
