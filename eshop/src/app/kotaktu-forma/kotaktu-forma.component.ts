import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-kotaktu-forma',
  templateUrl: './kotaktu-forma.component.html',
  styleUrls: ['./kotaktu-forma.component.css']
})
export class KotaktuFormaComponent implements OnInit {

  constructor(private formBuilder : FormBuilder) { }

  manoForma = this.formBuilder.group({
    vardas: "",
    telefonas: "",
    elPastas: "",
    zinute: "",
  })

  pateiktiForma(){
    console.log('Jusu forma issiusta!', this.manoForma.value);
    this.manoForma.reset();
  }

  ngOnInit() {
    this.manoForma = this.formBuilder.group({
      elPastas: [null, [Validators.required, Validators.email]]
  });
}

}
