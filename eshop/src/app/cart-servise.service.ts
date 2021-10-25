import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { produktai } from './Produktai';
import { ProduktoModelis } from './Produktai';

@Injectable({
  providedIn: 'root'
})
export class CartServiseService {

  constructor() { }

items: ProduktoModelis[]=[];

kainaAtnaujinta = new BehaviorSubject<boolean>(false);


addToCart(x:ProduktoModelis){
  
  this.items.push(x);
  this.getItemPrices();
  
  alert("preke priedeta i krepseli, galutine kaina:"+this.kaina)

  this.kainaAtnaujinta.next(true);
  
}

getItems() {
 return this.items;
}

kaina=0;
discount=true;

getDiscount(x:number){
  
  if(this.discount){
    this.discount=false;
    let a=this.kaina-((this.kaina/100)*x);
    
    this.kaina=a;
    
    alert('pritaikyta nuolaida '+x+' Nauja kaina:'+ this.kaina.toFixed(2) )
  }
  else{
    alert('nuolaida jau buvo pritaikyta')
  }
}
getItemPrices(){
   let a=0
  for(let x of this.items){
    a+=x.price
  }
  
  this.kaina=a;
  return this.kaina
}

clearCart(x:ProduktoModelis){
 this.items = [];
 
}

//removeCartItem(x:ProduktoModelis){
//  this.items=[];
//}



}
