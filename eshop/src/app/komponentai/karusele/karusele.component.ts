import { Component, OnInit } from '@angular/core';
import { IImage } from 'ng-simple-slideshow';

@Component({
  selector: 'app-karusele',
  templateUrl: './karusele.component.html',
  styleUrls: ['./karusele.component.css']
})
export class KaruseleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imageUrls: (string | IImage)[] = [
    { url: 'assets/pic1', caption: 'The first slide', href: '#' },
    { url: 'assets/pic2', caption: 'The first slide', href: '#' },
    { url: 'assets/pic3', caption: 'trecias pav', href: '#' },
    
  ];


}
