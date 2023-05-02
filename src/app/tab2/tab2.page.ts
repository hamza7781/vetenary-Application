import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  // create variables in the field 
  allData:string = "";
  message:string = "";

  constructor(private data:DataService) {}

  // get all the records in Json array
  getAllRecords(){
    this.data.getAllData().subscribe(
      (d:any)=>{
        this.allData = JSON.stringify(d);
      },
      (err:any)=>{
        this.message = "There are no records";
      }
    )
  }

}
