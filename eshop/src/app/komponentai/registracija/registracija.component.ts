import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';



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
    console.log(forma.value.email)
    console.log(forma.value.password)
    this.authService.emailSignUp(forma.value.email, forma.value.password);
    
  }



}
