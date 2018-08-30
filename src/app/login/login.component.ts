import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {DataService} from '../data.service';
import { User } from '../user/user';
import {AuthService} from '../service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  errorMessage = '';
  error: {name: string, message: string} = {name: '', message: ''};
newLogin:any
  constructor( private router : Router,
               private dataservice:DataService,
               public authService: AuthService) { }
  ngOnInit() {
    this.dataservice.getnewLogin().subscribe(res => {
      this.newLogin = res;
      for (var i = 0; i < this.newLogin.length; i++) {

        console.log(res);
      }

    })
  }
onLogin(): void {
  if (this.validateForm(this.email, this.password)) {
    this.authService.loginWithEmail(this.email, this.password)
      .then(() => this.router.navigate(['/landpage']))
      .catch(_error => {
        this.error = _error
        this.router.navigate(['/login'])
      })
  }
}
validateForm(email: string, password: string): boolean {
  if (email.length === 0) {
    this.errorMessage = 'Please enter Email!'
    return false
  }

  if (password.length === 0) {
    this.errorMessage = 'Please enter Password!'
    return false
  }

  if (password.length < 6) {
    this.errorMessage = 'Password should be at least 6 characters!'
    return false
  }

  this.errorMessage = ''

  return true
}
  
} 
   



