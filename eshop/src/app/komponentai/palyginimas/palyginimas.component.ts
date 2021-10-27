import { Component, OnInit } from '@angular/core';
import { CartServiseService } from 'src/app/cart-servise.service';
import { ProduktoModelis } from 'src/app/Produktai';


@Component({
  selector: 'app-palyginimas',
  templateUrl: './palyginimas.component.html',
  styleUrls: ['./palyginimas.component.css']
})
export class PalyginimasComponent implements OnInit {

  constructor(private service: CartServiseService) {
        this.lyginamosPrekes = this.service.gautiPalyginimoMasyva();
   }

  ngOnInit(): void {
  }
lyginamosPrekes: ProduktoModelis[]=[]; 


}


