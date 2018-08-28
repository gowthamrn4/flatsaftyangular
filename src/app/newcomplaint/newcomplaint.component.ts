import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
import {Http} from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-newcomplaint',
  templateUrl: './newcomplaint.component.html',
  styleUrls: ['./newcomplaint.component.css']
})
export class NewcomplaintComponent implements OnInit {
newComplaint:any;
  constructor(private dataservice:DataService,private http:Http) { }

  ngOnInit() {
    this.dataservice.getnewComplaint().subscribe(res=>{
      this.newComplaint=res;
      for(var i=0;i<this.newComplaint.length;i++){
        console.log(res);
      }
  })
  }

}
