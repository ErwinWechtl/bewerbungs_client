import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Firma } from 'src/app/shared/firma';
import { FirmaService } from 'src/app/shared/firma.service';

@Component({
  selector: 'we-item-firma',
  templateUrl: './item-firma.component.html',
  styleUrls: ['./item-firma.component.css']
})
export class ItemFirmaComponent {
  @Input() firma?: Firma;
}
