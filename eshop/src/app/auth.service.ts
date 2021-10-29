import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
   ) { }

dabartinisUser: any;

login(email: string, password: string) {
  this.afAuth.signInWithEmailAndPassword(email, password).then(async() => {
    
    
    console.log('AS PRISIJUGES');
    
    this.router.navigate(['/']);
    alert('Jus prisijunges:  '+ email);

    var user = await this.afAuth.currentUser;
this.dabartinisUser= user;

  if (user) {
    console.log('prisijunges vartotojas yra:')
    console.log(user);
  } else {
    // No user is signed in.
  }
  this.userAtnaujinta.next(true);
  });

}
emailSignUp(email: string, password: string) {
  this.afAuth.createUserWithEmailAndPassword(email, password);
}

logout() {
  this.afAuth.signOut().then(async() => {
    var user = await this.afAuth.currentUser;
this.dabartinisUser= user;

    this.router.navigate(['/'])});
   
    this.userAtnaujinta.next(true);
}

async getCurrentUser() {
  
  return this.dabartinisUser;
}

userAtnaujinta = new BehaviorSubject<boolean>(false);



}
