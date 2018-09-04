import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { map } from 'rxjs/operators';
import {AngularFireAuth} from 'angularfire2/auth';
import {ShareService} from '../service/share.service';
import {DataService} from '../data.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-newnews',
  templateUrl: './newnews.component.html',
  styleUrls: ['./newnews.component.css']
})
export class NewnewsComponent  {
  userId={
    uid:'',
  } 
   newsDetail= {
    uid:'',
    name:'',
    age:'',
    contact:'',
    address:''
  }

  newNews:any
  constructor(private afauth:AngularFireAuth,private router:Router, private dataService:DataService,
    private shareService:ShareService) { 
    this.userId.uid=afauth.auth.currentUser.uid;
  }
  ngOnInit() {
    this.dataService.findUser(this.userId).subscribe(res=>{
      this.newsDetail=res;
      console.log(res);
      this.shareService.setCurrentProfile(res);
  })
  }
  onSubmitnews(value){
    console.log(this.newsDetail);
    this.dataService.getnewNews(this.newsDetail).subscribe(res=>{
      this.router.navigate(['landpage/oldnews'])
      console.log(res);
    })
  }
}