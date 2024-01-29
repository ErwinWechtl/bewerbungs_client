import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBewerbungComponent } from './list-bewerbung/list-bewerbung.component';
import { ItemFirmaComponent } from './item-firma/item-firma.component';
import { ItemBewerbungComponent } from './item-bewerbung/item-bewerbung.component';
import { BewerbungRoutingModule } from './bewerbung-routing.module';
import { ShowBewerbungComponent } from './show-bewerbung/show-bewerbung.component';
import { ListFirmaComponent } from './list-firma/list-firma.component';
import { ShowFirmaComponent } from './show-firma/show-firma.component';



@NgModule({
  declarations: [
    ListBewerbungComponent,
    ListFirmaComponent,
    ItemFirmaComponent,
    ItemBewerbungComponent,
    ShowBewerbungComponent,
    ShowFirmaComponent
  ],
  imports: [
    CommonModule,
    BewerbungRoutingModule
  ]
})
export class BewerbungModule { }
