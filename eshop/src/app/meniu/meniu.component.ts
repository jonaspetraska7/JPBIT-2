import { Component, OnInit } from '@angular/core';
import { CartServiseService } from '../cart-servise.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-meniu',
  templateUrl: './meniu.component.html',
  styleUrls: ['./meniu.component.css']
})
export class MeniuComponent implements OnInit {

  constructor(
    private cartservisas: CartServiseService,
    private loginInfo: AuthService
    ) { }

  
  ngOnInit(): void {

    this.cartservisas.kainaAtnaujinta.subscribe(value => {
      if (value === true) { 
          this.suma = this.cartservisas.getItemPrices()
      }
    });

    this.loginInfo.userAtnaujinta.subscribe(async (value) => {
      if (value === true) { 
          this.user = await this.loginInfo.getCurrentUser()
      }
    });

  }
  atsijungti() {
  this.loginInfo.logout();
  }

    suma= this.cartservisas.getItemPrices()

    user: any;
}

 




