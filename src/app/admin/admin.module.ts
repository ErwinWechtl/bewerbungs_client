import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateBewerbungComponent } from './create-bewerbung/create-bewerbung.component';
import { EditBewerbungComponent } from './edit-bewerbung/edit-bewerbung.component';
import { FormBewerbungComponent } from './form-bewerbung/form-bewerbung.component';
import { FormFirmaComponent } from './form-firma/form-firma.component';
import { EditFirmaComponent } from './edit-firma/edit-firma.component';
import { CreateFirmaComponent } from './create-firma/create-firma.component';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [
    CreateBewerbungComponent,
    EditBewerbungComponent,
    FormBewerbungComponent,
    FormFirmaComponent,
    EditFirmaComponent,
    CreateFirmaComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
