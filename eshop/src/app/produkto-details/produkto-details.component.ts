import { Component, OnInit } from '@angular/core';
import { produktai, ProduktoModelis } from '../Produktai';
import { CartServiseService } from '../cart-servise.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-produkto-details',
  templateUrl: './produkto-details.component.html',
  styleUrls: ['./produkto-details.component.css']
})
export class ProduktoDetailsComponent implements OnInit {




  constructor(private route: ActivatedRoute, private router: Router, private cartServisas: CartServiseService) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('idProduct'));
  this.currentPreke=produktai.find(produktai=>produktai.id===productIdFromRoute)
  }
  prekes = produktai;

  currentPreke: ProduktoModelis | undefined;
  // getCurrentProduct(id: number) {
  //   for (let x of this.prekes) {
  //     if (x.id == id) {
  //       this.currentPreke = x;
  //     }

  //   }
  // }

}
