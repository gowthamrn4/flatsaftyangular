import { Component, OnInit } from '@angular/core';
import {ShareService} from '../service/share.service';
import {DataService} from '../data.service'
import {AngularFireAuth} from 'angularfire2/auth'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // adminDetail:any;
  userId = {
   uid:'',
 }
  adminDetail= {
   name:'',
   age:'',
   contact:'',
   address:''
 }
  constructor(private afauth:AngularFireAuth, private dataService:DataService,
    private shareService:ShareService) {
    this.userId.uid=afauth.auth.currentUser.uid;
    console.log(this.userId);
   }
  ngOnInit() {
    this.dataService.findUser(this.userId).subscribe(res=>{
      this.adminDetail=res;
      console.log(res);
      this.shareService.setCurrentProfile(res);
  })
  }

}
