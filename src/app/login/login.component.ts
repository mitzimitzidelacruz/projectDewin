import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { switchAll } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }

  constructor(
    private authservice: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  singIn() {
    this.authservice.signIn(this.user)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/home']);
        },
        err => console.log(err)
      )
  }

}


