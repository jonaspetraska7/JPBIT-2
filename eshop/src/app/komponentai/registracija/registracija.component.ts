import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AuthService } from 'src/app/auth.service';
import { stringify } from 'querystring';
import { registerLocaleData } from '@angular/common';


@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {

  constructor(
    private authService: AuthService ) { }


  ngOnInit(): void {
  }
   valstybes: any[]=[
    {id: 1, name: 'Lietuva'},
    {id: 2, name: 'Latvija'},
    {id: 3, name: 'Estija'},
    {id: 4, name: 'Lenkija'}
    
    ];

  pateiktiForma(forma: NgForm) {
    console.log(forma.value)
    let json = JSON.stringify(forma.value)
    console.log(json)
    
  }

// register() {
//   this.authService.emailSignUp(forma.email, forma.password);
// }

}
