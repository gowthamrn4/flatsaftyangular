import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { whenRendered } from '@angular/core/src/render3';
import { checkAndUpdateQuery } from '@angular/core/src/view/query';
import { Headers } from '@angular/http';

import { database } from 'firebase';
// import 'rxjs/add/operator/map'
// import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  newuser:any;
  newuser1:any;
  newNews:any;
  newComplaint:any;
  newMaintenance:any;
  newRequest:any;
  oldNews:any;
  oldComplaint:any;
  oldMaintenance:any;
  oldRequest:any;
  news:any;
  userDetail;any;
  status:any;
  url:"http://5b7e6d68adf2070014bfa35c.mockapi.io/api/v1/newnews";
  

  constructor( private http:Http,private router:Router) { }
  ngOnInit()
  {
    
  }
  newUser(value){
  return  this.http.post('https://5b7e6d68adf2070014bfa35c.mockapi.io/api/v1/fslogin',value)
    .pipe(map(data =>{
      if(data){
        alert("Please Login");
      }
      console.log(data)
    }))
  }
  newUsers(value)
  { 
    var list;
    this.http.get('https://5b7e6d68adf2070014bfa35c.mockapi.io/api/v1/fslogin',value)
    .pipe(map(data1 =>{
      if(data1==value)
      {
        this.router.navigate(['/landpage/home']); 

      }
      else{
        alert("bye");
      }
    }))
  }
  getnewNews(value){
    return this.http.post('https://flatsafety.herokuapp.com/news/createNews',value)
    .pipe(map(data=>this.newNews=data.json()))
   
  }
  postuserDetail(value){
    return this.http.post('http://5b7e6d68adf2070014bfa35c.mockapi.io/api/v1/userdetails',value)
    .pipe(map(data=>this.userDetail=data.json()))
   
  }
  getnewComplaint(){
    return this.http.get('https://flatsafety.herokuapp.com/complients/getAllComplients')
    .pipe(map(data=>this.newComplaint=data.json()))
  }
  getnewMaintenance(){
    return this.http.get('https://flatsafety.herokuapp.com/maintenace/getAllMaintence')
    .pipe(map(data=>this.newMaintenance=data.json()))
  }
  getnewRequest(){
    return this.http.get('https://flatsafety.herokuapp.com/riseReqs/getAllRiseReqs')
    .pipe(map(data=>this.newRequest=data.json()))
  }
  getoldComplaint(){
    return this.http.get('https://5b7e6d68adf2070014bfa35c.mockapi.io/api/v1/oldcomplaint')
    .pipe(map(data=>this.newComplaint=data.json()))
  }
  getoldRequest(){
    return this.http.get('https://5b7e6d68adf2070014bfa35c.mockapi.io/api/v1/oldrequest')
    .pipe(map(data=>this.oldRequest=data.json()))
  }
  getoldMaintenance(){
    return this.http.get('https://5b7e6d68adf2070014bfa35c.mockapi.io/api/v1/oldmaintenance')
    .pipe(map(data=>this.oldMaintenance=data.json()))
  }
  // getNews(){
  //    return this.http.get('https://flatsafety.herokuapp.com/news/createNews')
  //   .pipe(map(data=>this.oldNews=data.json()))
  // }
  getnewLogin()
  {
    return this.http.get('https://5b7e6d68adf2070014bfa35c.mockapi.io/api/v1/fslogin')
  }
}
