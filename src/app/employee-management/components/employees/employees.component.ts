import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './employees.component.html',
  styles: ``
})
export class EmployeesComponent implements OnInit{

  employees: any[] = [];

  constructor(private employeesService: EmployeesService) {
    console.log('1. Inside constructor of EmployeesComponent');
  }

  ngOnInit(): void {
    console.log('2. Inside ngOnInit of EmployeesComponent');
    // ideal place for us to hit the api on load
    // this will be called after constuctor 
    // whenever the component is coming in the view -- this method will be called
    // this is lifecycle hook

    this.employeesService.getEmployees()
      .subscribe((res: any) => {
        console.log(res);
        this.employees = res;
      })
  }
}
