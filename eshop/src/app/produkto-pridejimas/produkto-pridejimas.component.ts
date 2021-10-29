import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Form, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-produkto-pridejimas',
  templateUrl: './produkto-pridejimas.component.html',
  styleUrls: ['./produkto-pridejimas.component.css']
})
export class ProduktoPridejimasComponent implements OnInit {

  constructor(private firestore: AngularFirestore, private formBuilder: FormBuilder) {
    firestore.collection('projektas').valueChanges().subscribe((x: any) => this.naujas = x);

  }

  ngOnInit(): void {
  }

  productAddForm = this.formBuilder.group(
    {
      id: 0,
      title: '',
      price: 0,
      description: '',
      image: '',
      
      categories: [0,0,0],
      rating: this.formBuilder.group({
        rate : 0,
        count : 0
      }),
      quantity: 0
    }
  )

  onsubmit(x: FormGroup) {

    console.log(this.productAddForm.value)
    //this.firestore.collection('PridetiProduktai').add(x.value)
    //console.log('pridejom i firebase' + x.value);
    //this.productAddForm.reset();
    
  }



  naujas: any[] = []

  funkcija() {
    let naujasKazkas = {
      vardas: "kitas vardukas",
      telefonas: 15846
    }
    this.firestore.collection('projektas').add(naujasKazkas)
  }


}
