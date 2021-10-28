import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FireBaseService } from '../fire-base.service';

@Component({
  selector: 'app-produkto-pridejimas',
  templateUrl: './produkto-pridejimas.component.html',
  styleUrls: ['./produkto-pridejimas.component.css']
})
export class ProduktoPridejimasComponent implements OnInit {

  constructor(private firestore:AngularFirestore) { 
    firestore.collection('projektas').valueChanges().subscribe((x:any)=>this.naujas=x);
    
  }

  ngOnInit(): void {
  }

  naujas:any[]=[]

  funkcija(){
    let naujasKazkas = {
      vardas: "kitas vardukas",
      telefonas: 15846
    }
    this.firestore.collection('projektas').add(naujasKazkas)
  }

 
}
