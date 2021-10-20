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
  }

    suma= this.cartservisas.getItemPrices()

    
}

addToCart(produktai) {
  debugger;
  this.cartservisas.addToCart(produktai);
}
