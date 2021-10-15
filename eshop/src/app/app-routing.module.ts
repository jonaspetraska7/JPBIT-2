import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KontaktaiComponent } from './kontaktai/kontaktai.component';
import { PagrindinisComponent } from './pagrindinis/pagrindinis.component';
import { LoginComponent } from './komponentai/login/login.component';
import { PassRecoverComponent } from './komponentai/pass-recover/pass-recover.component';
import { RegistracijaComponent } from './komponentai/registracija/registracija.component';
import { ProduktasComponent } from './produktas/produktas.component';
import { ProduktuKategorijosComponent } from './produktu-kategorijos/produktu-kategorijos.component';

const routes: Routes = [
  {path: '', component:ProduktasComponent},
  {path: 'pagrindinis', component:PagrindinisComponent},
  {path: 'kontaktai', component:KontaktaiComponent},
  {path: 'ziviles', component:ProduktuKategorijosComponent},
  {path: 'registracija', component:RegistracijaComponent},
  {path: 'login', component:LoginComponent},
  {path: 'pass-recover', component:PassRecoverComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
