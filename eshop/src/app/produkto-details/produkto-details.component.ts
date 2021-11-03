import { Component, OnInit } from '@angular/core';
import { produktai, ProduktoModelis } from '../Produktai';
import { CartServiseService } from '../cart-servise.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-produkto-details',
  templateUrl: './produkto-details.component.html',
  styleUrls: ['./produkto-details.component.css']
})
export class ProduktoDetailsComponent implements OnInit {




  constructor(private route: ActivatedRoute, private router: Router, private firebase:AngularFirestore, private cartServisas: CartServiseService) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.firebase.collection('Produktai').valueChanges().subscribe((x:any) => this.prekes=x)
    
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('idProduct'));
  this.currentPreke=produktai.find(produktai=>produktai.id===productIdFromRoute)
  }
  prekes:any[]=[];

  currentPreke: ProduktoModelis | undefined;

  addTOCart(x:ProduktoModelis){
    this.cartServisas.addToCart(x)
  }
  inform(x:ProduktoModelis){
    alert(" Atsiprašome, kad prekės "+ x.title + " nebeturime, informuosime Jus kai vėl turėsime")
}

palyginti (x: any) {
  this.cartServisas.lyginti(x);
}

funkcija(){
  for(let x of this.prekes){
    alert('Prekes informacija gritai atsiras. Atsiprašome.')
    
  }
}
}

