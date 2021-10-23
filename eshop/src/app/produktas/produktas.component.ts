import { Component, OnInit } from '@angular/core';
import { ApiServisasService } from '../api-servisas.service';
import { produktai, ProduktoModelis } from '../Produktai';

@Component({
  selector: 'app-produktas',
  templateUrl: './produktas.component.html',
  styleUrls: ['./produktas.component.css']
})
export class ProduktasComponent implements OnInit {

  constructor(private API:ApiServisasService, ) { }

  ngOnInit(): void {
  }

produktai = produktai;

addToCart(x:ProduktoModelis){
 alert("cia reikia krepselio pridejimo funkcijos is serviso prekei" + x.title)

}
}
