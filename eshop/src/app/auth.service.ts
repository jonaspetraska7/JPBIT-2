import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
   ) { }

login(email: string, password: string) {
  this.afAuth.signInWithEmailAndPassword(email, password).then(() => {
    
    
    console.log('AS PRISIJUGES');
    
    this.router.navigate(['/']);
    alert('Jus prisijunges:  '+ email);
  });
}
emailSignUp(email: string, password: string) {
  this.afAuth.createUserWithEmailAndPassword(email, password);
}

logout() {
  this.afAuth.signOut().then(() => {this.router.navigate(['/'])});
}

async getCurrentUser() {
  var user = await this.afAuth.currentUser;

  if (user) {
    console.log('prisijunges vartotojas yra:')
    console.log(user);
  } else {
    // No user is signed in.
  }
  return user;
}





}
