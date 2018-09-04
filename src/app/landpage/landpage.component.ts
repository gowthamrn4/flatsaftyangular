import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {ShareService} from '../service/share.service';
import {DataService} from '../data.service'

@Component({
  selector: 'app-landpage',
  templateUrl: './landpage.component.html',
  styleUrls: ['./landpage.component.css']
})
export class LandpageComponent implements OnInit {
  userId={
    uid:'',
  }
  constructor(private afauth:AngularFireAuth, private dataService:DataService,
    private shareService:ShareService) {
    this.userId.uid=afauth.auth.currentUser.uid;
    console.log(this.userId.uid);
   }

  ngOnInit() {
    this.dataService.findUser(this.userId).subscribe(res=>{
      console.log(res);
      this.shareService.setCurrentProfile(res);
  })
}
}


