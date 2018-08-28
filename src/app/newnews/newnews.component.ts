import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
import {Http} from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-newnews',
  templateUrl: './newnews.component.html',
  styleUrls: ['./newnews.component.css']
})
export class NewnewsComponent implements OnInit {
  newNews:any
  constructor(private dataservice:DataService,private http:Http) { }

  ngOnInit() {
    this.dataservice.getnewNews().subscribe(res=>{
      this.newNews=res;
      for(var i=0;i<this.newNews.length;i++){
        console.log(res);
      }
  })
}
}
