import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../Service/employee-service.service';

@Component({
  selector: 'app-employee-addedit',
  templateUrl: './employee-addedit.component.html',
  styleUrls: ['./employee-addedit.component.css']
})
export class EmployeeAddeditComponent {
  employeeForm: FormGroup;
  employeeId!: number | null;
  isEditMode: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) {
    this.employeeForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.employeeId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.employeeId) {
      this.isEditMode = true;
      this.loadEmployeeDetails();
    }
  }
  loadEmployeeDetails(): void {
    const employee = this.employeeService.getEmployeeById(this.employeeId!);
    if (employee) {
      this.employeeForm.patchValue(employee);
    } else {
      // Handle when employee with given ID is not found
    }
  }
  onSubmit(): void {
    if (this.employeeForm.valid) {
      const formData = this.employeeForm.value;
      if (this.isEditMode) {
        this.employeeService.updateEmployee(formData);
      } else {
        this.employeeService.addEmployee(formData);
      }
      this.router.navigate(['/employees']);
    }
  }
}
