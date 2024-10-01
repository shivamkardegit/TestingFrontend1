import { Component } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../../../TypeScriptClasses/Employee';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrl: './addemployee.component.css'
})
export class AddemployeeComponent {
  employee: Employee = {
    name: '',
    email: '',
    phone: '',
    address: '',
    project_id: 0
  };

  constructor(private employeeService: EmployeeService, private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.employeeService.createEmployee(this.employee).subscribe(
        response => {
          console.log('Employee created successfully', response);
          form.resetForm();
          this.router.navigate(['/admin/employees']); 
        },
        error => {
          console.error('Error creating employee', error);
        }
      );
    }
  }
}
