import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SlideshowModule } from 'ng-simple-slideshow';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

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
import { Klaida404Component } from './komponentai/klaida404/klaida404.component';
import { KaruseleComponent } from './komponentai/karusele/karusele.component';


import { LabirintasComponent } from './labirintas/labirintas.component';
import { KotaktuFormaComponent } from './kotaktu-forma/kotaktu-forma.component';
import { ToTopComponent } from './to-top/to-top.component';
import { PalyginimasComponent } from './komponentai/palyginimas/palyginimas.component';
import { environment } from 'src/environments/environment';
import { ProduktoPridejimasComponent } from './produkto-pridejimas/produkto-pridejimas.component';


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
    LabirintasComponent,
    KotaktuFormaComponent,
    ToTopComponent,
    PalyginimasComponent,
    ProduktoPridejimasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SlideshowModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2CarouselamosModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
