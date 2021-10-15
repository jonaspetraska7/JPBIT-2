import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {

  constructor() { }

  

  ngOnInit(): void {
  }
  pateiktiForma(forma: NgForm) {
    console.log(forma.value)
    let json = JSON.stringify(forma.value)
    console.log(json)
  }
}
