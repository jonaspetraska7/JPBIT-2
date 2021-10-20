import { Injectable, EventEmitter  } from '@angular/core';
import { produktai } from './Produktai';

@Injectable({
  providedIn: 'root'
})
export class ApiServisasService {

  emitter = new EventEmitter();

  constructor() { }

  catId = 0;

  getID() { 
    return this.catId
  }

  changeID(x: number) {
    this.catId = x
    
  }

  getLocation(){
    return location.pathname.includes('kategorija')
  }
}
