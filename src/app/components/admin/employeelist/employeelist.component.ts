import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { Router } from '@angular/router';
import { Employee } from '../../../TypeScriptClasses/Employee';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrl: './employeelist.component.css'
})
export class EmployeelistComponent implements OnInit{
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees().subscribe((employees) => {
      this.employees = employees;
    });
  }

  addEmployee(): void {
    this.router.navigate(['/admin/add-employee']);
  }

  editEmployee(id: number | undefined): void {
    const updatedEmployee: Employee = { id, name: 'Updated Employee', email: 'updated@employee.com', phone: '0987654321', address: 'Updated Address', project_id : 1};
    this.employeeService.updateEmployee(id, updatedEmployee).subscribe((employee) => {
      const index = this.employees.findIndex(e => e.id === id);
      if (index !== -1) {
        this.employees[index] = employee;
      }
    });
  }

  deleteEmployee(id: number | undefined): void {
    this.employeeService.deleteEmployee(id).subscribe(() => {
      this.employees = this.employees.filter(employee => employee.id !== id);
    });
  }
}
