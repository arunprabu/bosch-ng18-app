import { Routes } from '@angular/router';
import { HomeComponent } from './home/components/home/home.component';
import { ConceptsComponent } from './concepts/components/concepts/concepts.component';
import { EmployeesComponent } from './employee-management/components/employees/employees.component';
import { ProductsComponent } from './products/components/products/products.component';
import { AboutComponent } from './about/components/about/about.component';
import { AddEmployeeComponent } from './employee-management/components/add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './employee-management/components/employee-details/employee-details.component';
import { UpdateEmployeeComponent } from './employee-management/components/update-employee/update-employee.component';

// Have the routing configuration here
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'concepts', component: ConceptsComponent },
  {
    path: 'employee-management',
    children: [
      { path: '', component: EmployeesComponent },
      { path: 'add', component: AddEmployeeComponent },
      { path: ':id', component: EmployeeDetailsComponent }, // id is the url param
      { path: ':id/edit', component: UpdateEmployeeComponent }, // id is the url param
    ],
  },
  { path: 'products', component: ProductsComponent },
  { path: 'about', component: AboutComponent },
];
