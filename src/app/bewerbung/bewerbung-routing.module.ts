import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBewerbungComponent } from './list-bewerbung/list-bewerbung.component';
import { ListFirmaComponent } from './list-firma/list-firma.component';
import { ShowBewerbungComponent } from './show-bewerbung/show-bewerbung.component';
import { ShowFirmaComponent } from './show-firma/show-firma.component';

const routes: Routes = [
  {
    path: 'bewerbung',
    children: [
      {path: '', redirectTo: 'list-bewerbung', pathMatch: 'full'},
      {path: 'list-bewerbung', component: ListBewerbungComponent},
      {path: 'list-firma', component: ListFirmaComponent},
      {path: 'list-firma/:id', component: ShowFirmaComponent},
      {path: 'show-bewerbung', component: ShowBewerbungComponent},
      {path: 'show-firma/:id', component: ShowFirmaComponent},
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BewerbungRoutingModule { }
