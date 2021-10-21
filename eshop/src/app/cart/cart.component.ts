import { Component, OnInit } from '@angular/core';
import { CartServiseService } from '../cart-servise.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();

  constructor(
    private cartService: CartServiseService
  ) { }

  ngOnInit(): void {
  }

}
