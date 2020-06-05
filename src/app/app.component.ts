import { Component } from '@angular/core';
import { CholaComponent } from './chola/chola.component';

//With DI
import { SalesComponent } from './sales/sales.component';
import { CollectionsComponent } from './collections/collections.component';
import { UserManagementComponent } from './user-management/user-management.component';

import { SampleService } from './sample.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Dependancy Injection';
//DI
  public chola: CholaComponent;

    constructor(){
       // this.chola = new CholaComponent();
        this.chola = new CholaComponent(new SalesComponent(),new CollectionsComponent(),new UserManagementComponent());
    }
  	createChola(){
  		return this.chola.complete(); 
  	}
  //Service
 //  constructor(private SampleService: SampleService) {
	// 	this.SampleService.logSomeMessage("Hi from AppComponent !")
	// }
}
