import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer class="text-center">
      <hr />
      <p>The current count is: {{ count() }}</p>
      <button (click)="increment()">Increment</button>
      <p>Copyright 2024 | Arun</p>
    </footer>
  `,
})
export class FooterComponent {
  count = signal(0);

  increment() {
    this.count.set(this.count() + 1);
  }
}
