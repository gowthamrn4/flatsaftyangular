import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route} from '@angular/router';
import {DataService} from '../data.service';
@Component({
  selector: 'app-new-maintenance-view-page',
  templateUrl: './new-maintenance-view-page.component.html',
  styleUrls: ['./new-maintenance-view-page.component.css']
})
export class NewMaintenanceViewPageComponent implements OnInit {
  allUsers:any;
  id:any;
  requestUser:any={
    _id:'',
    block:'',
    name:'',
    flatno:'',
    floor:'',
    contact:'',
    homecategory:'',
    maintenancecategory:'',
    remarks:'',
    section:'',
    uid:''

  }

constructor(private route:ActivatedRoute,private dataService:DataService) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.dataService.getnewMaintenance().subscribe(res => {
    this.allUsers=res;
    for(let i=0;i<this.allUsers.length;i++){
      if(this.id===this.allUsers[i]._id){
        this.requestUser._id=this.allUsers[i]._id;
        this.requestUser.name=this.allUsers[i].name;
        this.requestUser.flatno=this.allUsers[i].flatno;
        this.requestUser.floor=this.allUsers[i].floor;
        this.requestUser.block=this.allUsers[i].block;
        this.requestUser.remarks=this.allUsers[i].remarks;
        this.requestUser.section=this.allUsers[i].section;
        this.requestUser.homecategory=this.allUsers[i].homecategory;
        this.requestUser.uid=this.allUsers[i].uid;
        this.requestUser.contact=this.allUsers[i].contact;
        this.requestUser.maintenancecategory=this.allUsers[i].maintenancecategory;
      }

    }      console.log(this.requestUser);
    })

  }

}
