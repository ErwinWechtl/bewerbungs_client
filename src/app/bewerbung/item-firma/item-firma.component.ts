import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Firma } from 'src/app/shared/firma';
import { FirmaService } from 'src/app/shared/firma.service';

@Component({
  selector: 'we-item-firma',
  templateUrl: './item-firma.component.html',
  styleUrls: ['./item-firma.component.css']
})
export class ItemFirmaComponent {
  @Input() firma?: Firma;

  constructor(
    private service: FirmaService,
    private router: Router
  ) { }

  deleteFirma(firma: Firma) {
    if(confirm("Are you sure to delete firma with URL " + firma.webseite)) {
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
