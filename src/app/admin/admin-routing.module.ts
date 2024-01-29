import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBewerbungComponent } from './create-bewerbung/create-bewerbung.component';
import { CreateFirmaComponent } from './create-firma/create-firma.component';
import { EditBewerbungComponent } from './edit-bewerbung/edit-bewerbung.component';
import { EditFirmaComponent } from './edit-firma/edit-firma.component';

const routes: Routes = [
  {
    path: 'admin', 
    children: [
      {path: '', redirectTo: 'create-bewerbung', pathMatch: 'full'},
      {path: 'create-bewerbung', component: CreateBewerbungComponent},
      {path: 'create-firma', component: CreateFirmaComponent},
      {path: 'edit-bewerbung', component: EditBewerbungComponent},
      {path: 'edit-firma', component: EditFirmaComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
