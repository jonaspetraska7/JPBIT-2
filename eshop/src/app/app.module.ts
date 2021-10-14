import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduktasComponent } from './produktas/produktas.component';
import { MeniuComponent } from './meniu/meniu.component';
import { PagrindinisComponent } from './pagrindinis/pagrindinis.component';

import { KontaktaiComponent } from './kontaktai/kontaktai.component';
import { CartComponent } from './cart/cart.component';
import { ProduktuKategorijosComponent } from './produktu-kategorijos/produktu-kategorijos.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduktasComponent,
    MeniuComponent,
    PagrindinisComponent,
 
    KontaktaiComponent,
       CartComponent,
       ProduktuKategorijosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
