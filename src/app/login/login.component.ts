import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  onSubmit = function (user) {
    console.log(user);
  }


  ngOnInit() {
   this.myForm = new FormGroup({
     name:new FormControl('',Validators.required)
   })
  }
}
    
   



