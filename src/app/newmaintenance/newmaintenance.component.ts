import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
import {Http} from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-newmaintenance',
  templateUrl: './newmaintenance.component.html',
  styleUrls: ['./newmaintenance.component.css']
})
export class NewmaintenanceComponent implements OnInit {
newMaintenance:any
  constructor(private dataservice:DataService,private http:Http) { }

  ngOnInit() {
    this.dataservice.getnewMaintenance().subscribe(res=>{
      this.newMaintenance=res;
      for(var i=0;i<this.newMaintenance.length;i++){
        console.log(res);
      }
  })
  }

}
