import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule],
  template: `
    <ul class="navbar-nav me-auto mb-2 mb-md-0">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" routerLink="/">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="/concepts">Concepts</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="/employee-management"
          >Employee Management</a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="/products">Products</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="/about">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="/contact">Contact</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="/login">Login</a>
      </li>
    </ul>
  `,
  styles: ``,
})
export class MenuComponent {}
