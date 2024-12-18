import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-employee.component.html',
  styles: ``,
})
export class UpdateEmployeeComponent implements OnInit {
  employee: any; // original employee data from api call -- for us to RESET
  duplicateEmployee: any;

  constructor(
    private employeesService: EmployeesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const employeeId = this.route.snapshot.paramMap.get('id');
    console.log('Inside ngOnInit of EmployeeDetailsComponent');
    this.employeesService.getEmployeeById(employeeId as string).subscribe({
      next: (res: any) => {
        console.log(res);
        this.employee = res;
        this.duplicateEmployee = { ...this.employee };
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  handleUpdateEmployee(updateEmployeeForm: NgForm) {
    console.log(updateEmployeeForm); // form state -- use this for validation
    console.log(this.duplicateEmployee); // updated employee data

    // send the updated data to the service
    // get the response from the service
  }
}
