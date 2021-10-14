import { Component, OnInit } from '@angular/core';
import { produktai } from '../Produktai';
import { ProduktoModelis } from '../Produktai';

@Component({
  selector: 'app-produktu-kategorijos',
  templateUrl: './produktu-kategorijos.component.html',
  styleUrls: ['./produktu-kategorijos.component.css']
})
export class ProduktuKategorijosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  prekes = produktai;

  categorisedItems:ProduktoModelis[]=[]

  kategorijos = ["men's clothing", "jewelery", "electronics", "women's clothing"]

  getCategory(a:number) {
    this.categorisedItems=[]
    for (let x of this.prekes) {
      
      if (x.category == this.kategorijos[a]) {
this.categorisedItems.push(x)
      }
    }
  }
}
