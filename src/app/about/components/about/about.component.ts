import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <h1>About</h1>
      <div class="alert alert-success" *ngIf="isLoggedIn">
        <strong>You are authenticated!</strong>
      </div>

      @if (isLoggedIn) {
      <div class="alert alert-success">
        <strong>You are authenticated!</strong>
      </div>
      } @else {
      <div class="alert alert-danger">
        <strong>You are not authenticated. Please login</strong>
      </div>
      }
    </div>
  `,
  styles: ``,
})
export class AboutComponent {
  isLoggedIn = false;
}
