import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor() { }

  logSomeMessage(msg: any) { 
		console.log("Message is : " + msg); 
	}
}
