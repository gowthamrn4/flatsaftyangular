import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
import {Http} from '@angular/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent  {

  userDetail:any;
  constructor(private dataservice:DataService,private router:Router) { }
  userDetails(value){
    this.dataservice.postuserDetail(value).subscribe(res=>{
      console.log(res);
      if(res)
      {
         alert("successfull")
         this.router.navigate(['/login'])
      }
    else{
      alert("Failed");
    }
    })
  }
}