// AnimalData - data defintion for server

export class PetData{
	name : string;
	age : number;
	species : string;
	sex: string;
	phoneNumber: string;
	
	constructor (n: string, a: number, sp: string, sx: string, pn: string){
		this.name = n;
		this.age = a;
		this.species = sp;
		this.sex = sx;
		this.phoneNumber = pn; 
	}
}