import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-kotaktu-forma',
  templateUrl: './kotaktu-forma.component.html',
  styleUrls: ['./kotaktu-forma.component.css']
})
export class KotaktuFormaComponent implements OnInit {

  zinute : any[]= [];

  constructor(private firestore: AngularFirestore) {
    this.firestore.collection('projektas').valueChanges().subscribe((x : any) => this.zinute = x)
   }

  ngOnInit(): void {}
  pateiktiForma(manoForma: NgForm){
    let naujaZinute = {
      vardas: manoForma.value.vardas,
      telefonas: manoForma.value.telefonas,
      email: manoForma.value.email,
      zinute: manoForma.value.zinute,
    }
    console.log(naujaZinute);
    this.firestore.collection('Zinutes').doc('KlientuZinutes').set(naujaZinute);
    manoForma.reset();
  }
}

