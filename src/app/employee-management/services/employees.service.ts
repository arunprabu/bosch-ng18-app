import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  constructor(private http: HttpClient) {}

  // receiving the form data from the comp
  createEmployee(formData: any) {
    console.log(formData);

    // send the above data to the REST API
    // 1. what's the REST API URL?  https://jsonplaceholder.typicode.com/users
    // 2. what's the HTTP method? POST
    // 3. What's the REST AP Client? HttpClient
    return this.http.post(
      'https://jsonplaceholder.typicode.com/users',
      formData
    );
    // receive the response from the REST API and return it to the component
    // NOTE: because we use http client, we need to provide it provideHttpClient(), in app.config.ts
  }

  getEmployees() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
