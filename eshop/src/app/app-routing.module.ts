import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { KontaktaiComponent } from './kontaktai/kontaktai.component';
import { PagrindinisComponent } from './pagrindinis/pagrindinis.component';
import { LoginComponent } from './komponentai/login/login.component';
import { PassRecoverComponent } from './komponentai/pass-recover/pass-recover.component';
import { RegistracijaComponent } from './komponentai/registracija/registracija.component';
import { ProduktasComponent } from './produktas/produktas.component';
import { ProduktuKategorijosComponent } from './produktu-kategorijos/produktu-kategorijos.component';
import { ProduktoDetailsComponent } from './produkto-details/produkto-details.component';
import { MemoryGameComponent } from './memory-game/memory-game.component';

const routes: Routes = [
  {path: '', component:ProduktuKategorijosComponent},
  {path: 'pagrindinis', component:PagrindinisComponent},
  {path: 'kontaktai', component:KontaktaiComponent},
  {path: 'ziviles', component:ProduktuKategorijosComponent},
  {path:'memory', component:MemoryGameComponent},

  {path: 'kategorija', component:ProduktuKategorijosComponent},
  {path: 'kategorija/:idCategory', component: ProduktuKategorijosComponent},

  {path: 'produktas/:idProduct', component:ProduktoDetailsComponent},

  {path: 'registracija', component:RegistracijaComponent},
  {path: 'login', component:LoginComponent},
  {path: 'pass-recover', component:PassRecoverComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
