import { Component, OnInit } from '@angular/core';

import { SalesComponent } from '../sales/sales.component';
import { CollectionsComponent } from '../collections/collections.component';
import { UserManagementComponent } from '../user-management/user-management.component';


@Component({
  selector: 'app-chola',
  templateUrl: './chola.component.html',
  styleUrls: ['./chola.component.css']
})
export class CholaComponent{

	// //Without DI
 //  	public sales: SalesComponent;
 //  	public collections: CollectionsComponent;
 //  	public usermanagement : UserManagementComponent;

	// constructor() {
	//    this.sales = new SalesComponent();
	//    this.collections = new CollectionsComponent();
	//    this.usermanagement = new UserManagementComponent();
	// }
	//With DI
	constructor(public sales: SalesComponent,public collections: CollectionsComponent,public usermanagement : UserManagementComponent) {}
	public description = 'Chola ';
	  complete() {
	    return `${this.description} has `+
	      `${this.sales.sfe} sfe's, ${this.collections.cfe} cfe's and, total  ${this.usermanagement.umEntry} userManagement entry.`;
	 
	}



}
