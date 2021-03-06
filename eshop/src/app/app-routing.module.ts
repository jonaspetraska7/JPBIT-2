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
import { Klaida404Component } from './komponentai/klaida404/klaida404.component';
import { KaruseleComponent } from './komponentai/karusele/karusele.component';
import { LabirintasComponent } from './labirintas/labirintas.component';
import { LeftCategoryComponent } from './left-category/left-category.component';
import { CartComponent } from './cart/cart.component';
import { PalyginimasComponent } from './komponentai/palyginimas/palyginimas.component';
import{ AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';
import { AppComponent } from './app.component';
import { ProduktoPridejimasComponent } from './produkto-pridejimas/produkto-pridejimas.component';


const routes: Routes = [
  {path: '', component:ProduktuKategorijosComponent},
  {path: 'pagrindinis', component:PagrindinisComponent},
  {path: 'kontaktai', component:KontaktaiComponent},
  {path: 'adding', component:ProduktoPridejimasComponent, canActivate: [AngularFireAuthGuard]},
  {path:'memory', component:MemoryGameComponent},
  {path:'labirintas', component:LabirintasComponent},

  {path: 'kategorija', component:ProduktuKategorijosComponent},
  {path: 'kategorija/:idCategory', component: ProduktuKategorijosComponent},

  {path: 'produktas/:idProduct', component:ProduktoDetailsComponent},
  {path: 'karusele', component:KaruseleComponent},
  {path: 'registracija', component:RegistracijaComponent},
  {path: 'login', component:LoginComponent},
  {path: 'pass-recover', component:PassRecoverComponent},
  {path: 'klaida404', component:Klaida404Component},
  {path:'left', component:LeftCategoryComponent},
  {path: 'cart', component:CartComponent},
  {path: 'palyginimas', component:PalyginimasComponent},
  {path: '**',   redirectTo: '/klaida404' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
