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
      {path: '', redirectTo: 'firma', pathMatch: 'full'},
      {path: 'firma',
      children: [
        {path: '', component: CreateFirmaComponent},
        {path: ':id', component: EditFirmaComponent},
        {path: ':firmaId/bewerbung', component: CreateBewerbungComponent},
        {path: ':firmaId/bewerbung/:id', component: EditBewerbungComponent},
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
