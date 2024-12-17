import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-employee.component.html',
  styles: ``,
})
export class AddEmployeeComponent {
  // Step 1: Let's have the ts equilent for the form tag -- FormGroup
  addEmployeeForm: FormGroup;
  isSaved = false;

  constructor(private employeesService: EmployeesService) {
    // step 1 continues
    this.addEmployeeForm = new FormGroup({
      // Step 2: Let's have the ts equilent for the form fields -- name, phone, email
      name: new FormControl('', Validators.required), // step 5: implementing validation
      phone: new FormControl('', Validators.required), // Refer html for step 6.
      email: new FormControl('', [Validators.required, Validators.email]),
    });
    // For step 3 -- refer html
  }

  handleAddEmployee() {
    console.log(this.addEmployeeForm.value);
    // Send the above data to the service 
    this.employeesService.createEmployee(this.addEmployeeForm.value)
      .subscribe( (res: any) => {
        // receive the response from service
        console.log(res);
        this.isSaved = true;
      })
    
  }
}
