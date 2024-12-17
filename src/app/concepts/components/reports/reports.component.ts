import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-reports', // <app-reports (reportGenerated)="handleReportGenerated()"></app-reports>
  standalone: true,
  imports: [],
  template: `
    <div class="bg-warning p-2">
      <h3>Reports</h3>
      <p>You can generate report here</p>
      <button class="btn btn-primary" (click)="handleGenerateReport()">
        Generate Report
      </button>
    </div>
  `,
  styles: ``,
})
export class ReportsComponent {
  // keeping the data in child component
  report = {
    id: 324567,
    status: 'Report generated successfully',
  };

  // Step 1: Let's create custom event
  // Step 1.1 create a public variable of type EventEmitter
  @Output() reportGenerated = new EventEmitter(); // Step 1.2 make it a custom event
  
  // Step 2: refer concepts.comp.html
 
  // Step 4: receive the data in the parent component
  // Step 5: display it in parent component html

  handleGenerateReport() {
    console.log('Generating report. please wait...');
    console.log('1. Preparing to send the data to the parent component');
    console.log(this.report);
    // Step 3: Trigger / Emit the event with the data in the child component through program
    this.reportGenerated.emit(this.report);
  }
}
