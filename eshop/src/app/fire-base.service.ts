import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FireBaseService {

  constructor(private fire:AngularFirestore) { 
    this.fire.collection('projektas').valueChanges().subscribe((x:any)=>this.kolekcija=x)
  }


kolekcija:any[]=[]

grazintiProdukta(){
  return this.kolekcija
}

}
