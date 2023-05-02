//Data Service - http://spike.scu.edu.au:8080/DataServ
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PetData } from './petData';

@Injectable()

export class DataService {
	private url : string = "http://spike.scu.edu.au:8080/PetServ/";
	constructor (private http : HttpClient){}
	
	//Method to get a single record
	public getData(name : string) : Observable <PetData>{
		return this.http.get<PetData>(this.url + name);
		
	}
	//Method to retrieve all information
	public getAllData() : Observable <PetData>{
		return this.http.get<PetData>(this.url);
	}
	
	public doDelete(name : string) : Observable <PetData> {
		return this.http.delete<PetData>(this.url + name);
		
	}
	
	public putData(record : PetData) : Observable <PetData> {
		return this.http.put<PetData>(this.url, record);
		
	}
}