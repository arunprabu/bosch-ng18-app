import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from '../profile/profile.component';
import { ReportsComponent } from '../reports/reports.component';

@Component({
  selector: 'app-concepts',
  standalone: true,
  imports: [FormsModule, ProfileComponent, ReportsComponent], // FormsModule is needed for ngModel
  templateUrl: './concepts.component.html',
  styles: ``,
})
export class ConceptsComponent {
  // interpolation
  appName = 'My Big App';

  // property binding
  courseName = 'Angular 18';

  // two way binding
  courseDuration = 6;

  // custom property binding
  profiles = [
    { name: 'Steve', age: 50 },
    { name: 'Will', age: 70 },
  ];

  // custom event related
  dataReceivedFromChild: any;

  inputValue = 'Angular App Development';

  // event binding
  handleClick() {
    alert('Clicked');
  }

  handleReportGenerated(event: any) {
    // receive the data in the parent component ts
    console.log(event); // child component data
    this.dataReceivedFromChild = event; // setting the child component data in a public var
  }

  handleInputChange(event: any) { // getting event object
    console.log(event.target.value);
    this.inputValue = event.target.value;
  }
}
