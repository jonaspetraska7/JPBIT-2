import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduktasComponent } from './produktas/produktas.component';
import { MeniuComponent } from './meniu/meniu.component';
import { PagrindinisComponent } from './pagrindinis/pagrindinis.component';

import { KontaktaiComponent } from './kontaktai/kontaktai.component';
import { CartComponent } from './cart/cart.component';
import { ProduktuKategorijosComponent } from './produktu-kategorijos/produktu-kategorijos.component';
import { RegistracijaComponent } from './komponentai/registracija/registracija.component';
import { LoginComponent } from './komponentai/login/login.component';
import { PassRecoverComponent } from './komponentai/pass-recover/pass-recover.component';
import { ProduktoDetailsComponent } from './produkto-details/produkto-details.component';
import { LeftCategoryComponent } from './left-category/left-category.component';
import { FooterComponent } from './footer/footer.component';
import { MemoryGameComponent } from './memory-game/memory-game.component';
import { BanerisComponent } from './komponentai/baneris/baneris.component';
import { KrepselioSumaComponent } from './krepselio-suma/krepselio-suma.component';

import { Klaida404Component } from './komponentai/klaida404/klaida404.component';
import { KaruseleComponent } from './komponentai/karusele/karusele.component';


import { LabirintasComponent } from './labirintas/labirintas.component';


@NgModule({
  declarations: [
    AppComponent,
    ProduktasComponent,
    MeniuComponent,
    PagrindinisComponent,
    
    KontaktaiComponent,
    CartComponent,
    ProduktuKategorijosComponent,
    RegistracijaComponent,
    LoginComponent,
    PassRecoverComponent,
    ProduktoDetailsComponent,
    LeftCategoryComponent,
    FooterComponent,
    MemoryGameComponent,
    BanerisComponent,
    Klaida404Component,
    KaruseleComponent,
    LabirintasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
