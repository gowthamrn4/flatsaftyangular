import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
import {Http} from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-newnews',
  templateUrl: './newnews.component.html',
  styleUrls: ['./newnews.component.css']
})
export class NewnewsComponent  {

  // langs: string[] = [
  //   'Function',
  //   'Emergency',
  //   'InFormation'
  // ]
  newNews:any
  constructor(private dataservice:DataService) { }
  onSubmitnews(value){
    this.dataservice.getnewNews(value).subscribe(res=>{
      console.log(res);
    })
  }
}