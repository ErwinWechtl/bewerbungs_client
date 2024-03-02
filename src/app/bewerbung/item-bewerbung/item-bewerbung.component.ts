import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Bewerbung } from 'src/app/shared/bewerbung';
import { BewerbungService } from 'src/app/shared/bewerbung.service';
import { Firma } from 'src/app/shared/firma';

@Component({
  selector: 'we-item-bewerbung',
  templateUrl: './item-bewerbung.component.html',
  styleUrls: ['./item-bewerbung.component.css']
})
export class ItemBewerbungComponent {
  @Input() bewerbung?: Bewerbung;
  @Input() firma?: Firma;

  constructor(
    private service: BewerbungService,
    private bewerbungService: BewerbungService,
    private router: Router
  ) {  }


  deleteBewerbung(bewerbung: Bewerbung) {
    if(confirm("Are you sure to delete Bewerbung  '" + bewerbung.sentto + "'")) {
      this.service.delete(this.firma!.id, bewerbung.id).subscribe(() => {
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
          return false;
        }
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigateByUrl('/bewerbung/show-firma/' + this.firma?.id);
      })
      }
  }
  
}


