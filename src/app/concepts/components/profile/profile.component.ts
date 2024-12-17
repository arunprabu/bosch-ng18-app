import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile', // <app-profile [age]>
  standalone: true,
  imports: [],
  template: `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ profileName }}</h5>
        <p class="card-text">Age: {{ age }}</p>
        <a href="#" class="btn btn-primary">View more</a>
      </div>
    </div>
  `,
  styles: ``,
})
export class ProfileComponent {
  // Step 1: Let's create custom property
  @Input() profileName = 'John';
  @Input() age = 10; // @Input() will make this var as custom property usable in app-profile tag
}
