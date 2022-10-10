import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  
  test (){

    //validaciones que creo que no esta bien
    let inputPassword = document.getElementById("password") as HTMLInputElement;
    let valuesPassword = inputPassword.value;
    if (valuesPassword.length >= 8) {
      console.log("Ingreso correctamente");
    }else{
      alert("El Minimo de Caracteres es de 8");
    }
  }
  
}

