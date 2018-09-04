import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Http} from '@angular/http';
import { Router } from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent  {
  userId={
    uid:'',
  }
  userDetail={

     uid:''
  }
  arrayOne(n: number): any[] {
    return Array(n);
  }
  

  constructor(private dataservice:DataService,
              private router:Router,
              private afauth:AngularFireAuth) { 
              this.userDetail.uid=this.afauth.auth.currentUser.uid;
                    }
  userDetails(){
    console.log(this.userDetail)
    this.dataservice.postuserDetail(this.userDetail).subscribe(res=>{
    this.router.navigate(['/login'])
   })
  }
}

