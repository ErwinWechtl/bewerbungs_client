import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Bewerbung } from 'src/app/shared/bewerbung';
import { BewerbungService } from 'src/app/shared/bewerbung.service';
import { Firma } from 'src/app/shared/firma';
import { FirmaService } from 'src/app/shared/firma.service';

@Component({
  selector: 'we-item-firma',
  templateUrl: './item-firma.component.html',
  styleUrls: ['./item-firma.component.css']
})
export class ItemFirmaComponent {
  @Input() firma?: Firma;
  $bewerbungen?: Observable<Bewerbung[]>;

  constructor(
    private service: FirmaService,
    private bewerbungService: BewerbungService,
    private router: Router
  ) { 
    console.log("in item-firma.component.ts 1");
    if (this.firma) {
      console.log("in item-firma.component.ts in if 2");
      this.$bewerbungen = bewerbungService.getAll(this.firma.id);

alert("in constuctor item-firma.component.ts in if 2");

this.$bewerbungen.pipe(map(processArray => {
  console.log('processArray: ', typeof processArray);
  }))

      
    }
  }


  deleteFirma(firma: Firma) {
    if(confirm("Are you sure to delete Firma  '" + firma.name + "'")) {
      this.service.delete(firma.id).subscribe(() => {
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
          return false;
        }
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigateByUrl('/bewerbung/list-firma');
      })
      }
  }

}
