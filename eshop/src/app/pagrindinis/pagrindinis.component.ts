import { Component, OnInit } from '@angular/core';
import { produktai } from '../Produktai';


@Component({
  selector: 'app-pagrindinis',
  templateUrl: './pagrindinis.component.html',
  styleUrls: ['./pagrindinis.component.css']
})
export class PagrindinisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  prekes = produktai;




  bandymas(x: string) {
    let byPrice = this.prekes.sort(function (a, b): any {
      return b.price < a.price ? 1 : b.price > a.price ? -1 : 0;
    });
    let byPriceDsc = this.prekes.sort(function (a, b): any {
      return b.price > a.price ? 1 : b.price < a.price ? -1 : 0;
    });
    let byName = this.prekes.sort(function (a, b): any {
      return b.title < a.title ? 1 : b.title > a.title ? -1 : 0;
    });
    let byNameDsc = this.prekes.sort(function (a, b): any {
      return b.title > a.title ? 1 : b.title < a.title ? -1 : 0;
    });
    let byRating = this.prekes.sort(function (a, b): any {
      return b.rating.rate > a.rating.rate ? 1 : b.rating.rate < a.rating.rate ? -1 : 0;
    });
    let byRatingDsc = this.prekes.sort(function (a, b): any {
      return b.rating.rate < a.rating.rate ? 1 : b.rating.rate > a.rating.rate ? -1 : 0;
    });
    let byRatingCount = this.prekes.sort(function (a, b): any {
      return b.rating.rate > a.rating.rate ? 1 : b.rating.rate < a.rating.rate ? -1 : 0;
    });
    let byRatingCountDsc = this.prekes.sort(function (a, b): any {
      return b.rating.rate > a.rating.rate ? 1 : b.rating.rate < a.rating.rate ? -1 : 0;
    });
    switch (x) {
      case "123": { this.prekes = byPriceDsc; break; };
      case "234": { this.prekes = byName; break };
      case "345": { this.prekes = byRating; break };
      default: break;



    }


    // sortPrice() {
    //   let naujas = this.prekes.sort(function (a, b): any {
    //     return b.price < a.price ? 1 : b.price > a.price ? -1 : 0;
    //   });
    //   return naujas
    // }

  }
}
