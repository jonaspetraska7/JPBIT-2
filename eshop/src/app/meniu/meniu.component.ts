import { Component, OnInit } from '@angular/core';
import { CartServiseService } from '../cart-servise.service';
import { produktai } from '../Produktai';

@Component({
  selector: 'app-meniu',
  templateUrl: './meniu.component.html',
  styleUrls: ['./meniu.component.css']
})
export class MeniuComponent implements OnInit {

  constructor(private cartservisas: CartServiseService) { }

  ngOnInit(): void {

    this.cartservisas.kainaAtnaujinta.subscribe(value => {
      if (value === true) { 
          this.suma = this.cartservisas.getItemPrices()
      }
    });

  }

    suma= this.cartservisas.getItemPrices()

    
}

 //Pirkti(x:produktomodelis) {
 // debugger;
 //  this.cartservisas.Pirkti(x:produktomodelis);

