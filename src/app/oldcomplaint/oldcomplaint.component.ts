import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
import {Http} from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-oldcomplaint',
  templateUrl: './oldcomplaint.component.html',
  styleUrls: ['./oldcomplaint.component.css']
})
export class OldcomplaintComponent implements OnInit {
  oldComplaint:any;
  constructor(private dataservice:DataService,private http:Http) { }


  ngOnInit() {
    this.dataservice.getoldComplaint().subscribe(res=>{
      this.oldComplaint=res;
      for(var i=0;i<this.oldComplaint.length;i++){
        console.log(res);
  }
    })
}
}
