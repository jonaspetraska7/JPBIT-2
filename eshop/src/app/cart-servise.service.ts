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

getItems() {
 return this.items;
}

kaina=0
discount=true;

getDiscount(x:number){
  if(this.discount){
    this.discount=false;
    this.kaina=this.kaina-(this.kaina/100*x)
    alert('pritaikyta nulaida '+x+' Nauja kaina:'+ this.kaina)
  }
  else{
    alert('nuolaida jau buvo pritaikyta')
  }
}
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
