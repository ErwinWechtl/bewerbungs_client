import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Firma } from 'src/app/shared/firma';
import { FirmaService } from 'src/app/shared/firma.service';

@Component({
  selector: 'we-list-firma',
  templateUrl: './list-firma.component.html',
  styleUrls: ['./list-firma.component.css']
})
export class ListFirmaComponent {
  $firmen: Observable<Firma[]>;

  constructor(private firmaService: FirmaService) {
    this.$firmen = firmaService.getAll();
  }

}
