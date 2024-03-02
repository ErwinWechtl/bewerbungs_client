import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Bewerbung } from 'src/app/shared/bewerbung';
import { BewerbungService } from 'src/app/shared/bewerbung.service';
import { Firma } from 'src/app/shared/firma';
import { FirmaService } from 'src/app/shared/firma.service';

@Component({
  selector: 'we-show-firma',
  templateUrl: './show-firma.component.html',
  styleUrls: ['./show-firma.component.css']
})
export class ShowFirmaComponent {
  firma$: Observable<Firma>;
  bewerbungen$: Observable<Bewerbung[]>;

  constructor(
    private firmaService: FirmaService,
    private bewerbungService: BewerbungService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { 
    const firmaId = this.activatedRoute.snapshot.paramMap.get('id');
    this.firma$ = firmaService.get(firmaId!);
    this.bewerbungen$ = this.bewerbungService.getAll(firmaId!);
    this.bewerbungen$.forEach(bewerbungsArray => alert("sentTo: " + bewerbungsArray[0].sentto));
  }


  deleteFirma(firma: Firma) {
    if(confirm("Are you sure to delete Firma  '" + firma.name + "'")) {
      this.firmaService.delete(firma.id).subscribe(() => {
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
          return false;
        }
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigateByUrl('/bewerbung/list-firma');
      })
      }
  }


}
