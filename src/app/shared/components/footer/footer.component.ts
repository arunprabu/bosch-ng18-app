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
      <p>Copyright {{ copyrightYear }} | Arun</p>
    </footer>
  `,
})
export class FooterComponent {
  // interpolation
  copyrightYear = 2024;
}
