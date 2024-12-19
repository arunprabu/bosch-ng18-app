import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { EllipsisPipe } from '../../../shared/pipes/ellipsis.pipe';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, EllipsisPipe], // common module is for click event and pipe as well
  template: `
    <div>
      <h1>About</h1>
      <h2>Signals Demo | signal is a way to manage state of the component</h2>
      <p>Counter: {{ counter() }}</p>
      <button class="btn btn-success" (click)="handleIncrement()">
        Increment
      </button>

      <hr />
      <h2>Pipes Demo | pipes are used to transform data</h2>
      <h5>Without Pipe</h5>
      <p>{{ randomText }}</p>

      <h5>With uppercase Pipe</h5>
      <p>{{ randomText | uppercase }}</p>

      <h5>With lowercase Pipe</h5>
      <p>{{ randomText | lowercase }}</p>

      <h5>Without date Pipe</h5>
      <p>{{ today }}</p>

      <h5>With date Pipe</h5>
      <p>{{ today | date }}</p>
      <p>{{ today | date : 'medium' }}</p>
      <p>{{ today | date : 'short' }}</p>
      <p>{{ today | date : 'long' }}</p>
      <p>{{ today | date : 'MMM-dd-yyy  hh:mm:ss a' }}</p>

      <h5>With ellipsis Pipe</h5>
      <p>{{ randomText | ellipsis }}</p>
      <p>{{ randomText | ellipsis : 20 }}</p>
      <p>{{ randomText | ellipsis : 30 }}</p>
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

  randomText = 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.';
  today = new Date();

  handleIncrement() {
    // update the state of the counter
    this.counter.set(this.counter() + 1);
  }

  // isLoggedIn = false;
}
