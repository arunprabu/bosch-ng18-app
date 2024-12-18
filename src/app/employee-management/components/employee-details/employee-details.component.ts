import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './employee-details.component.html',
  styles: ``,
})
export class EmployeeDetailsComponent implements OnInit {
  employee: any;

  constructor(private employeesService: EmployeesService, private route: ActivatedRoute) {
   
  }

  ngOnInit(): void {
    // let's read the url param
    const employeeId = this.route.snapshot.paramMap.get('id');
    console.log('Inside ngOnInit of EmployeeDetailsComponent');
    this.employeesService.getEmployeeById(employeeId as string).subscribe({
      next: (res: any) => {
        console.log(res);
        this.employee = res;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
