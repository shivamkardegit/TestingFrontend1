import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../TypeScriptClasses/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'http://localhost:8097/employees';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}`);
  }

  getEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}/${id}`);
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.baseUrl, employee);
  }

  updateEmployee(id: number | undefined, employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.baseUrl}/${id}`, employee);
  }

  deleteEmployee(id: number | undefined): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}

