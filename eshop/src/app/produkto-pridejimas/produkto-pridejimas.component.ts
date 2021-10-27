import { Component, OnInit } from '@angular/core';
import { FireBaseService } from '../fire-base.service';

@Component({
  selector: 'app-produkto-pridejimas',
  templateUrl: './produkto-pridejimas.component.html',
  styleUrls: ['./produkto-pridejimas.component.css']
})
export class ProduktoPridejimasComponent implements OnInit {

  constructor(private fire:FireBaseService) { }

  ngOnInit(): void {
  }

}
