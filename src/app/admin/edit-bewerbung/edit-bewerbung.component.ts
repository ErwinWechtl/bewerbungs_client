import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';
import { Bewerbung } from 'src/app/shared/bewerbung';
import { BewerbungService } from 'src/app/shared/bewerbung.service';
import { FirmaService } from 'src/app/shared/firma.service';

@Component({
  selector: 'we-edit-bewerbung',
  templateUrl: './edit-bewerbung.component.html',
  styleUrls: ['./edit-bewerbung.component.css']
})
export class EditBewerbungComponent {
  bewerbung$: Observable<Bewerbung>;
  firmaId?: string;

  constructor(private service: BewerbungService, private route: ActivatedRoute, private router: Router) {
    this.firmaId = this.route.snapshot.paramMap.get('firmaId')!;
    this.bewerbung$ = this.route.paramMap.pipe(
      map(params => params.get('id')!),
      switchMap(id => this.service.get(this.firmaId!, id))
      );
  }

  update(bewerbung: Bewerbung) {
    this.service.update(this.firmaId!, bewerbung);
    this.router.navigateByUrl("/bewerbung/show-firma/" + this.firmaId);
  }

}
