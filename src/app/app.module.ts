import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ProjectlistComponent } from './components/admin/projectlist/projectlist.component';
import { EmployeelistComponent } from './components/admin/employeelist/employeelist.component';
import { AddemployeeComponent } from './components/admin/addemployee/addemployee.component';
import { UpdatedetailsComponent } from './components/employee/updatedetails/updatedetails.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    EmployeeComponent,
    ProjectlistComponent,
    EmployeelistComponent,
    AddemployeeComponent,
    UpdatedetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
