import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
import {Http} from '@angular/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-newrequest',
  templateUrl: './newrequest.component.html',
  styleUrls: ['./newrequest.component.css']
})
export class NewrequestComponent implements OnInit {
newRequest:any
  constructor(private dataservice:DataService,private http:Http) { }

  ngOnInit() {
    this.dataservice.getnewRequest().subscribe(res=>{
      this.newRequest=res;
      for(var i=0;i<this.newRequest.length;i++){
        console.log(res);
      }
  })
  }

}
