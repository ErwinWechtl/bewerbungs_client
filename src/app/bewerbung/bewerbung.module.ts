import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowBewerbungComponent } from './show-bewerbung/show-bewerbung.component';
import { ShowFirmaComponent } from './show-firma/show-firma.component';
import { ItemFirmaComponent } from './item-firma/item-firma.component';
import { ItemBewerbungComponent } from './item-bewerbung/item-bewerbung.component';



@NgModule({
  declarations: [
    ShowBewerbungComponent,
    ShowFirmaComponent,
    ItemFirmaComponent,
    ItemBewerbungComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BewerbungModule { }
