import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
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
  getnewNews(){
    return this.http.get('https://5b7e6d68adf2070014bfa35c.mockapi.io/api/v1/newnews')
    .pipe(map(data=>this.newNews=data.json()))
  }
  getnewComplaint(){
    return this.http.get('https://5b7e6d68adf2070014bfa35c.mockapi.io/api/v1/newcomplaint')
    .pipe(map(data=>this.newComplaint=data.json()))
  }
  getnewMaintenance(){
    return this.http.get('https://fierce-inlet-19946.herokuapp.com/maintenace/getAllMaintence')
    .pipe(map(data=>this.newMaintenance=data.json()))
  }
  getnewRequest(){
    return this.http.get('https://5b7e6d68adf2070014bfa35c.mockapi.io/api/v1/newrequest')
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
  getoldNews(){
    return this.http.get('https://5b7e6d68adf2070014bfa35c.mockapi.io/api/v1/oldnews')
    .pipe(map(data=>this.oldNews=data.json()))
  }
  getnewLogin()
  {
    return this.http.get('https://5b7e6d68adf2070014bfa35c.mockapi.io/api/v1/fslogin')
  }
}
