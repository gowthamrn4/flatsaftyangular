import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
import {Http} from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-oldrequest',
  templateUrl: './oldrequest.component.html',
  styleUrls: ['./oldrequest.component.css']
})
export class OldrequestComponent implements OnInit {

  oldRequest:any
  constructor(private dataservice:DataService,private http:Http) { }

  ngOnInit() {
    this.dataservice.getoldRequest().subscribe(res=>{
      this.oldRequest=res;
      for(var i=0;i<this.oldRequest.length;i++){
        console.log(res);
  }

})
  }
  }
