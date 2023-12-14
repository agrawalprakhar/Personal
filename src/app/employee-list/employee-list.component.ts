import { Component } from '@angular/core';
import { Employee } from '../Model/employee';
import { EmployeeService } from '../Service/employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  employees: Employee[] = [];
  employeeToDelete: Employee | null = null;
  deleteMessage = '';
  deleteMessageVisible = false;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.loadEmployees();
  }
  
  loadEmployees(): void {
    this.employees = this.employeeService.getEmployees();
  }

  
  deleteEmployee(employee: Employee): void {
    this.employeeToDelete = employee;
    this.deleteMessage = `Are you sure you want to delete ${employee.name}?`;
 
  }
  cancelDelete(): void {
    this.employeeToDelete = null;
    this.deleteMessage = '';
  }

  confirmDelete(): void {
    if (this.employeeToDelete) {
      this.employeeService.deleteEmployee(this.employeeToDelete.id);
      this.deleteMessage = `The Employee ${this.employeeToDelete.name} is deleted successfully.`;
      this.deleteMessageVisible = true;

      setTimeout(() => {
        this.deleteMessage = '';
        this.deleteMessageVisible = false;
        this.loadEmployees();
      }, 2000);
    }

    this.employeeToDelete = null;
  }
}
