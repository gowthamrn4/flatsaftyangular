import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  
  onSubmit = function (user) {
    console.log(user);
  }
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
});

  ngOnInit() {
   
  }
}
    
   



