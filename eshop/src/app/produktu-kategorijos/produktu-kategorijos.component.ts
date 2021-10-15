import { Component, OnInit } from '@angular/core';
import { CartServiseService } from '../cart-servise.service';
import { produktai } from '../Produktai';
import { ProduktoModelis } from '../Produktai';
import { kategorijos } from '../KategorijuDuomenys';
import { KategorijuModelis } from '../KategorijuDuomenys';

@Component({
  selector: 'app-produktu-kategorijos',
  templateUrl: './produktu-kategorijos.component.html',
  styleUrls: ['./produktu-kategorijos.component.css']
})
export class ProduktuKategorijosComponent implements OnInit {

  constructor(private cartServisas:CartServiseService) { }

  ngOnInit(): void {
  }

  prekes = produktai;
  
  naujas = this.sortPrice();

  prekesPrices:ProduktoModelis[]=[]

  categorisedItems:ProduktoModelis[]=[]
  
  kategorijos = ["men's clothing", "jewelery", "electronics", "women's clothing"]

  sortedPrice=this.cartServisas.getSortedPrice();

  sortPrice(){
    let naujas = this.prekes.sort(function (a, b): any {
      return b.price < a.price ? 1 : b.price > a.price ? -1 : 0;
    });
    return naujas
  }

  
 
getCategory(a:number) {
 this.categorisedItems=[]
 for (let x of this.prekes) {
      
 if (x.category == this.kategorijos[a]) {
this.categorisedItems.push(x)
   }
  }
  }

categories= kategorijos



}

