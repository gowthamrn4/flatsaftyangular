import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
import {Http} from '@angular/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-oldnews',
  templateUrl: './oldnews.component.html',
  styleUrls: ['./oldnews.component.css']
})
export class OldnewsComponent implements OnInit {
  oldNews:any;
  constructor(private dataservice:DataService,private http:Http) { }

  ngOnInit() {
  //   this.dataservice.getNews().subscribe(res=>{
  //     this.oldNews=res;
  //     for(var i=0;i<this.oldNews.length;i++){
  //       console.log(res);
  //     }
  // })
  }

}
