import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = {
    userName: '',
    userLastName: '',
    email: '',
    password: ''
  }

  constructor() {
  }

  ngOnInit() {

  }
  singUp() {
  console.log(this.user)
  }

}