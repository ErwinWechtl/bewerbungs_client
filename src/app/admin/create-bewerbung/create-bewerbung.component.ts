import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bewerbung } from 'src/app/shared/bewerbung';
import { BewerbungService } from 'src/app/shared/bewerbung.service';

@Component({
  selector: 'we-create-bewerbung',
  templateUrl: './create-bewerbung.component.html',
  styleUrls: ['./create-bewerbung.component.css']
})
export class CreateBewerbungComponent {
  firmaId?: string;

  constructor(private bewerbungService: BewerbungService, private route: ActivatedRoute, private router: Router) { 
    this.firmaId = this.route.snapshot.paramMap.get('firmaId')!;
  }

  create(bewerbung: Bewerbung) {
    this.bewerbungService.create(this.firmaId!, bewerbung).subscribe(createdBewerbung => {
      this.router.navigateByUrl("/bewerbung/show-firma/" + this.firmaId);
     });
  }

}
