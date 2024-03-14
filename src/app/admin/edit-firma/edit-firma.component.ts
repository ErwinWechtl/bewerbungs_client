import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';
import { Firma } from 'src/app/shared/firma';
import { FirmaService } from 'src/app/shared/firma.service';

@Component({
  selector: 'we-edit-firma',
  templateUrl: './edit-firma.component.html',
  styleUrls: ['./edit-firma.component.css']
})
export class EditFirmaComponent {
  firma$: Observable<Firma>;

  constructor(private service: FirmaService, private route: ActivatedRoute, private router: Router) {
    this.firma$ = this.route.paramMap.pipe(
      map(params => params.get('id')!),
      switchMap(id => this.service.get(id))
      );
  }

  update(firma: Firma) {
    this.service.update(firma);
    this.router.navigateByUrl("/bewerbung/list-firma");
  }

}
