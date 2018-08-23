import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/Http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent  {
  onSubmit = function (user) {
    console.log(user);
  }
}
            

