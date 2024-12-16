import { Component, signal } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MenuComponent],
  template: `
    <footer class="text-center">
      <hr />
      <app-menu></app-menu>
      <p>Copyright 2024 | Arun</p>
    </footer>
  `,
})
export class FooterComponent {
  // count = signal(0);
  // increment() {
  //   this.count.set(this.count() + 1);
  // }
}
