import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { PetData } from '../petData';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
// create variables in the field 
name: string = "";
species: string =  "";
ageString: string = "";
age: number;
sex:string = "";
phoneNumber:string = "";
message:string = "";

  constructor(private data:DataService) {}

  // add records to the server 
  addRecord(){
    this.data.putData(new PetData(this.name, this.age, this.species, this.sex, this.phoneNumber)).subscribe(
      (d : PetData)=>{
        this.age = parseInt(this.ageString);
        if(this.name == ""){ // trigger if name is empty
          this.message = "Please enter the name";
        } else if(this.species == ""){  // trigger if species is empty
          this.message = "Please select the species";
        } else if(this.ageString == ""){  // trigger if age is empty
          this.message = "Please enter the age ";
        } else if(this.sex == ""){  // trigger if sex is empty
          this.message = "Please select the sex";
        } else if(this.phoneNumber == ""){  // trigger if phone number is empty
          this.message = "Please enter the phone number";
        } else{ // trigger if all the statement does not match
          this.message = "The new record is added";
        }
      },
      (err: any)=>{
        this.message = "The operation was not successful";
      }
    )
  }

}
