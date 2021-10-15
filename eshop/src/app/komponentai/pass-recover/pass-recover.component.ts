import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pass-recover',
  templateUrl: './pass-recover.component.html',
  styleUrls: ['./pass-recover.component.css']
})
export class PassRecoverComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  recoverForma(forma: NgForm) {
    console.log(forma.value)
    let json = JSON.stringify(forma.value)
    console.log(json)
  }
}
