import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { Employee } from '../../../TypeScriptClasses/Employee';

@Component({
  selector: 'app-updatedetails',
  templateUrl: './updatedetails.component.html',
  styleUrl: './updatedetails.component.css'
})
export class UpdatedetailsComponent implements OnInit {
  employee :Employee= {id: 0, name: '', email: '', phone: '' , address: '', project_id:0};

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    // Logic to get the current employee details
    this.employeeService.getEmployee(1).subscribe((employee) => {
      this.employee = employee;
    });
  }

  onSubmit(): void {
    this.employeeService.updateEmployee(this.employee.id, this.employee).subscribe(() => {
      // Logic to handle successful update
      alert('Employee details updated successfully!');
    });
  }
}
