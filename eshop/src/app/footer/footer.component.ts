import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  kontaktai : any;

  constructor(private firestore: AngularFirestore) { 
    this.firestore.collection('Kontaktai').valueChanges().subscribe((x : any) => this.kontaktai = x)
  }

  ngOnInit(): void {
  }

}
