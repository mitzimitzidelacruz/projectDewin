import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

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

  constructor(private authService: AuthService) {
  }

  ngOnInit() {

  }
  singUp() {
  this.authService.signUp(this.user)
  .subscribe(
    res => {
      console.log(res);
      localStorage.setItem('token',res.token);
    },
    err => console.log(err)
  )}

}