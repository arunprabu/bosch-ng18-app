import { Routes } from '@angular/router';
import { HomeComponent } from './home/components/home/home.component';
import { ConceptsComponent } from './concepts/components/concepts/concepts.component';
import { EmployeesComponent } from './employee-management/components/employees/employees.component';
import { AboutComponent } from './about/components/about/about.component';
import { AddEmployeeComponent } from './employee-management/components/add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './employee-management/components/employee-details/employee-details.component';
import { UpdateEmployeeComponent } from './employee-management/components/update-employee/update-employee.component';
import { LoginComponent } from './auth/components/login/login.component';
import { authGuard } from './shared/guards/auth.guard';
import { ContactComponent } from './contact/components/contact/contact.component';
import { LocationsComponent } from './contact/components/locations/locations.component';
import { ReactUsComponent } from './contact/components/react-us/react-us.component';

// Have the routing configuration here
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'concepts', component: ConceptsComponent, canActivate: [authGuard] },
  {
    path: 'employee-management',
    children: [
      { path: '', component: EmployeesComponent },
      { path: 'add', component: AddEmployeeComponent },
      { path: ':id', component: EmployeeDetailsComponent }, // id is the url param
      { path: ':id/edit', component: UpdateEmployeeComponent }, // id is the url param
    ],
  },
  // Lazy loading a module
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),
  },
  { path: 'about', component: AboutComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent },
  {
    path: 'contact',
    component: ContactComponent,
    children: [
      { path: '', redirectTo: 'locations', pathMatch: 'full' }, // Default route
      { path: 'locations', component: LocationsComponent },
      { path: 'reach-us', component: ReactUsComponent },
    ],
  },
];
