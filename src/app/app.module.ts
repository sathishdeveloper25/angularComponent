import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculaterComponent } from './calculater/calculater.component';
import { CholaComponent } from './chola/chola.component';
import { SalesComponent } from './sales/sales.component';
import { CollectionsComponent } from './collections/collections.component';
import { UserManagementComponent } from './user-management/user-management.component';

import { SampleService } from './sample.service';


@NgModule({
  declarations: [
    AppComponent,
    CalculaterComponent,
    CholaComponent,
    SalesComponent,
    CollectionsComponent,
    UserManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SalesComponent,CollectionsComponent,UserManagementComponent],//
  bootstrap: [AppComponent]
})
export class AppModule { }
