import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-kotaktu-forma',
  templateUrl: './kotaktu-forma.component.html',
  styleUrls: ['./kotaktu-forma.component.css']
})
export class KotaktuFormaComponent implements OnInit {

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {}
  pateiktiForma(manoForma: NgForm){
    let naujaZinute = {
      vardas: manoForma.value,
    }
    this.firestore.collection('projektas').doc('naujaZinute').set(naujaZinute);
    manoForma.reset();
  }
}

