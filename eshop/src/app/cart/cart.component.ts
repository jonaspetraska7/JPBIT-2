import { Component, OnInit } from '@angular/core';
import { CartServiseService } from '../cart-servise.service';
import { ProduktoModelis } from '../Produktai';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();

  //public produktai : any =[];

  constructor(
  private cartService: CartServiseService){}


  ngOnInit(): void {
    this.cartService.getItems();
  }
 // removeItem(x:ProduktoModelis){
 //   this.cartService.remove

 // }
}
