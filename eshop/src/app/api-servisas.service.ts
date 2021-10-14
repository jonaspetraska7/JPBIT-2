import { Injectable } from '@angular/core';
import { produktai } from './Produktai';


@Injectable({
  providedIn: 'root'
})
export class ApiServisasService {

  constructor() { }

  async getItems(){
    let atsakymas=await fetch("https://fakestoreapi.com/products");
    let duomenys = await atsakymas.json();
    return duomenys
  }




}
export interface ProduktoModelis{
  id: number,
  title:string;
  price:number;
  description:string;
  image:string;
  category:string;
  rating:object
}