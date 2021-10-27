import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-palyginimas',
  templateUrl: './palyginimas.component.html',
  styleUrls: ['./palyginimas.component.css']
})
export class PalyginimasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}
let palyginimas: any[] = ['3'];


function palyginti(x: any) {
  palyginimas.push(x);
}
