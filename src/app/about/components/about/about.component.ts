import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <h1>About</h1>
      <h2>Signals Demo | signal is a way to manage state of the component</h2>
      <p>Counter: {{ counter() }}</p>
      <button class="btn btn-success" (click)="handleIncrement()">
        Increment
      </button>
    </div>
  `,
  styles: `
    h1 {
      color: green;
    }
  `,
})
export class AboutComponent {
  counter = signal(0); // counter = 0;

  handleIncrement() {
    // update the state of the counter 
    this.counter.set(this.counter() + 1);
  }

  // isLoggedIn = false;
}
