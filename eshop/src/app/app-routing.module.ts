import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KontaktaiComponent } from './kontaktai/kontaktai.component';
import { PagrindinisComponent } from './pagrindinis/pagrindinis.component';
import { ProduktasComponent } from './produktas/produktas.component';
import { ProduktuKategorijosComponent } from './produktu-kategorijos/produktu-kategorijos.component';

const routes: Routes = [
  {path: '', component:ProduktasComponent},
  {path: 'pagrindinis', component:PagrindinisComponent},
  {path: 'kontaktai', component:KontaktaiComponent},
  {path: 'ziviles', component:ProduktuKategorijosComponent},
  {path: 'kategorija', component:ProduktuKategorijosComponent},
  {path: 'kategorija/:idCategory', component:ProduktuKategorijosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
