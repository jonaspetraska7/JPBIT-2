import { Component, OnInit } from '@angular/core';
import { CartServiseService } from '../cart-servise.service';

@Component({
  selector: 'app-krepselio-suma',
  templateUrl: './krepselio-suma.component.html',
  styleUrls: ['./krepselio-suma.component.css']
})
export class KrepselioSumaComponent implements OnInit {

  getItemPrices()
{

}
  constructor(
    private service: CartServiseService
  ) { }

  ngOnInit(): void {
  }

}
