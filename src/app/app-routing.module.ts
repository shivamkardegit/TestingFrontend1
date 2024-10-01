import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { ProjectlistComponent } from './components/admin/projectlist/projectlist.component';
import { EmployeelistComponent } from './components/admin/employeelist/employeelist.component';
import { AddemployeeComponent } from './components/admin/addemployee/addemployee.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { UpdatedetailsComponent } from './components/employee/updatedetails/updatedetails.component';

const routes: Routes = [{ path: 'admin', component: AdminComponent, children: [
  { path: 'projects', component: ProjectlistComponent },
  { path: 'employees', component: EmployeelistComponent },
  { path: 'add-employee', component: AddemployeeComponent }
]},
{ path: 'employee', component: EmployeeComponent, children: [
  { path: 'update-details', component: UpdatedetailsComponent }
]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
