import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { PetData } from '../petData';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page{
// create variables in the field 
name:string = "";
species:string =  "";
ageString:string = "";
age:number;
sex:string = "";
phoneNumber:string = "";
message:string = "";



  constructor (private data: DataService, private alertController: AlertController) {}

  // update records
  updateRecord(){
      this.data.putData(new PetData(this.name, this.age, this.species, this.sex,this.phoneNumber)).subscribe(
        (d : PetData)=>{
          this.age = parseInt(this.ageString);
          if(this.name == ""){// trigger if name is empty
            this.message = "Please enter the name";
          } else if(this.species == ""){// trigger if species is empty
            this.message = "Please select the species";
          } else if(this.ageString == ""){ // trigger if age is empty
            this.message = "Please enter the age ";
          } else if(this.sex == ""){ // trigger if sex is empty
            this.message = "Please select the sex";
          } else if(this.phoneNumber == ""){ // trigger if phone number is empty
            this.message = "Please enter the phone number";
          } else{ // trigger if all the statement does not match
            this.message = "The record is updated";
          }
        },
        (err: any)=>{
          this.message = "The operation was not successful";
        }
      )
    }

    // get the record by specifying name 
    getRecord(){
      this.data.getData(this.name).subscribe(
        (d:PetData)=>{
          this.name = d.name;
          this.species = d.species;
          this.age = d.age;
          this.sex = d.sex;
          this.phoneNumber = d.phoneNumber;
          
        },
        (err:any)=>{
          this.message = "The record is not existed";
        },
      );
    }

    // delete the record 
    async deleteRecord(){
      const alert = await this.alertController.create({ // create alert 
        header: "Warming",
        message: "Do you want to delete the record?",
        buttons:[{ // create button 
          text: "No",
          role: "cancel",
          handler: ()=>{ // if choose no, exit from alert and print out the log 
            console.log("Delete operation is cancelled");
          },
        },
        {
          text: "Yes",
          handler:()=>{ // if choose yes, delete the record
            this.data.doDelete(this.name).subscribe(
              (d:PetData)=>{
                this.name = "";
                this.species = "";
                this.age = undefined;
                this.sex = "";
                this.phoneNumber = "";
                this.message = "The record is deleted";
              },
              (err:any)=>{
                this.message = "The record is not existed or the operation was not successful";
              }
            )
          },
        },
      ],
      });
      await alert.present(); // appear the alert 
    }
  }


