import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/Http';
import {DataService} from '../data.service'
import { User } from '../user/user';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent  {

  constructor(private dataservice:DataService){}
  // onSubmit = function (user) {
  //   console.log(user);
  // }
  onSubmit(value){
    this.dataservice.newUser(value).subscribe(res=>{
      console.log
    })
  }
}
            

