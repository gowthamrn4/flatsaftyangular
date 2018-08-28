import { Component, OnInit,HostBinding} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {DataService} from '../data.service';
import { User } from '../user/user';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { moveIn } from '../router.animations';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations:[moveIn()],
  host:{'[@moveIn]':''}
})
export class LoginComponent implements OnInit {
newLogin:any
  constructor(public af: AngularFire,private router : Router,private dataservice:DataService) { }
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
   



