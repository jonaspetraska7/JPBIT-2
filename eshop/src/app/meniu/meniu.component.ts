import { Component, OnInit } from '@angular/core';
import { CartServiseService } from '../cart-servise.service';

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
