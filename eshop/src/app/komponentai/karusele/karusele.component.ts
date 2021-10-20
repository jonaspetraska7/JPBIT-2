import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-karusele',
  templateUrl: './karusele.component.html',
  styleUrls: ['./karusele.component.css']
})
export class KaruseleComponent implements OnInit {

  images: Array<any> = []

  constructor() { this.images = [
      { name: 'assets/pic1.jpg' },
      { name: 'assets/pic2.jpg' },
      { name: 'assets/pic3.jpg' },
      
    ]}

  ngOnInit(): void {
  }


}
