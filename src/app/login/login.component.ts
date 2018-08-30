import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {DataService} from '../data.service';
import { User } from '../user/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
newLogin:any
  constructor( private router : Router,private dataservice:DataService) { }
  ngOnInit() {
    this.dataservice.getnewLogin().subscribe(res=>{
      this.newLogin=res;
      for(var i=0;i<this.newLogin.length;i++){
       
        console.log(res);
  }

})
  }
onSubmit1(value){
  this.router.navigate(['/landpage/home']);
}
  
} 
   



