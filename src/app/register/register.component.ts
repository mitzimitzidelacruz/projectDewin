import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
//aquí agregamos la variable que se necesita para las validaciones de la contraseña
  //paspassword: string | undefined;
 // paspasswordArray: string;
 

  constructor() { 
    //this.paspasswordArray = [];
  }

  ngOnInit() {
    
  }

}