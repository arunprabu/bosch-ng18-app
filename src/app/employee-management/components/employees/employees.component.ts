import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './employees.component.html',
  styles: ``,
})
export class EmployeesComponent implements OnInit {
  isLoading: boolean = true; // To track loading state
  employees: any[] = [];
  errorMessage: string = '';

  constructor(private employeesService: EmployeesService) {
    console.log('1. Inside constructor of EmployeesComponent');
  }

  ngOnInit(): void {
    // ideal place for us to hit the api on load
    // this will be called after constuctor
    // whenever the component is coming in the view -- this method will be called
    // this is lifecycle hook
    console.log('2. Inside ngOnInit of EmployeesComponent');

    this.employeesService.getEmployees().subscribe({
      next: (res: any) => { // handle the positive response
        console.log(res);
        this.isLoading = false;
        this.employees = res;
      },
      error: (err: any) => { // handle the error
       console.log(err);
       this.isLoading = false;
       this.errorMessage = "Some error occurred. Please try again later";
      },
    });
  }
}
