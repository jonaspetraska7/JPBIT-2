import { Component, OnInit } from '@angular/core';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Form, FormArray, FormControl, FormGroup, FormBuilder, ReactiveFormsModule, AbstractControl, Validators } from '@angular/forms';
import { kategorijos } from '../KategorijuDuomenys';
import { produktai } from '../Produktai';


@Component({
    selector: 'app-produkto-pridejimas',
    templateUrl: './produkto-pridejimas.component.html',
    styleUrls: ['./produkto-pridejimas.component.css']
})
export class ProduktoPridejimasComponent implements OnInit {

    constructor(private firestore: AngularFirestore, private formBuilder: FormBuilder) {
        firestore.collection('Produktai').valueChanges().subscribe((x: any) => this.naujas = x);

    }

    ngOnInit(): void {
    }

  
    tuscia=new FormArray([])

    pridedam(){
        const categorijos = this.formBuilder.group({
            numb:[0, Validators.maxLength(10)]
        })
        this.tuscia.push(categorijos)
    }
    // get kazkas(){
    //     return this.tuscia.controls[] as FormArray;
    // }


kazkas = produktai;

kategoriju = kategorijos



leidziam(){
    // let a=1;
    // for(let x of this.kazkas){
    //     this.firestore.collection('Produktai').doc(a.toString()).set(x)
    //     a++
    // }

    // for(let x of this.kazkas){
    //     this.firestore.collection('PridetiProduktai').add(x)
    // }

}

    productAddForm = this.formBuilder.group(
        {
            id: 0,
            title: '',
            price: 0,
            description: '',
            image: '',

            categorijos: this.formBuilder.array([]),

            rating: this.formBuilder.group({
                rate: 0,
                count: 0
            }),
            quantity: 0
        }
    )

    onsubmit(x: FormGroup) {

        console.log(this.productAddForm.value)
        //this.firestore.collection('PridetiProduktai').add(x.value)
        console.log('pridejom i firebase' + x.value);
        this.productAddForm.reset();

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
