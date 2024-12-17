import { Routes } from '@angular/router';
import { HomeComponent } from './home/components/home/home.component';
import { ConceptsComponent } from './concepts/components/concepts/concepts.component';
import { EmployeesComponent } from './employee-management/components/employees/employees.component';
import { ProductsComponent } from './products/components/products/products.component';
import { AboutComponent } from './about/components/about/about.component';

// Have the routing configuration here
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'concepts', component: ConceptsComponent }, 
  { path: 'employee-management', component: EmployeesComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'about', component: AboutComponent },
];
