import { Injectable } from '@angular/core';
import { produktai } from './Produktai';
import { ProduktoModelis } from './Produktai';

@Injectable({
  providedIn: 'root'
})
export class CartServiseService {

  constructor() { }

items: ProduktoModelis[]=[];
kainos:number[] = []

sortPrice(){
  for(let x of produktai){
    this.kainos.push(x.price)
  }
  this.kainos.sort()
}

getSortedPrice(){
  this.sortPrice();
  return this.kainos
}

addToCart(x:ProduktoModelis){
  this.items.push(x);
}

getItems(x:ProduktoModelis) {
 return this.items;
}

clearCart(x:ProduktoModelis){
 this.items = [];
 return this.items;
}

}
