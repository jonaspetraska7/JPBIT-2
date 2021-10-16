import { Injectable } from '@angular/core';
import { produktai } from './Produktai';
import { ProduktoModelis } from './Produktai';

@Injectable({
  providedIn: 'root'
})
export class CartServiseService {

  constructor() { }

items: ProduktoModelis[]=[];


addToCart(x:ProduktoModelis){
  this.items.push(x);
}

getItems(x:ProduktoModelis) {
 return this.items;
}

kaina=0

getItemPrices(){
  for(let x of this.items){
    this.kaina+=x.price
  }
  return this.kaina
}

clearCart(x:ProduktoModelis){
 this.items = [];
 return this.items;
}



}
