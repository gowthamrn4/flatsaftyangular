import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
import {Http} from '@angular/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-oldmaintenance',
  templateUrl: './oldmaintenance.component.html',
  styleUrls: ['./oldmaintenance.component.css']
})
export class OldmaintenanceComponent implements OnInit {
oldMaintenance:any
  constructor(private dataservice:DataService,private http:Http) { }

  ngOnInit() {
    this.dataservice.getoldMaintenance().subscribe(res=>{
      this.oldMaintenance=res;
      for(var i=0;i<this.oldMaintenance.length;i++){
        console.log(res);
      }
  })
  }

}
