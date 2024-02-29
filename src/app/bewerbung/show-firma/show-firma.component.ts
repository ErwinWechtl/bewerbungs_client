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
//    private route: ActivatedRoute,
    private router: Router
  ) { 
    const firmaId = this.activatedRoute.snapshot.paramMap.get('id');
    this.firma$ = firmaService.get(firmaId!);
    this.bewerbungen$ = this.bewerbungService.getAll(firmaId!);

//    this.activatedRoute.paramMap.subscribe(params =>{
//      const firmaId = params.get('id');
//      if (firmaId) {
//        firmaService.get(firmaId).subscribe(aFirma => {this.firma = aFirma});
//        this.getBewerbungen();
//      }
//    })
//    console.log("constructor: " + this.firma);
  }

  // getBewerbungen() {
  //   console.log("getBewerbungen von Firma " + this.firma);
  //   if (this.firma) {
  //     console.log("getBewerbungen von Firma in if" + this.firma.name);
  //     this.bewerbungService.getAll(this.firma.id).subscribe(bewerbung => {console.log(bewerbung); this.bewerbungen?.push(bewerbung[0])});
  //     if (this.bewerbungen) {
  //       alert("getBewerbungen return: " + this.bewerbungen);
  //       return this.bewerbungen;
  //     }
  //    }
  //    alert("getBewerbungen returned empty array ");
  //    return <Bewerbung[]>[];
  // }

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
