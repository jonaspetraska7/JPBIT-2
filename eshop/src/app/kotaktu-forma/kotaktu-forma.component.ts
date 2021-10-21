import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-kotaktu-forma',
  templateUrl: './kotaktu-forma.component.html',
  styleUrls: ['./kotaktu-forma.component.css']
})
export class KotaktuFormaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
  pateiktiForma(manoForma: NgForm){
    console.log(manoForma.value);
    let json = JSON.stringify(manoForma.value);
    console.log(json)
    manoForma.reset();
  }
}

