import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials: any) {
    console.log(credentials);

    return this.http.post('https://reqres.in/api/login', credentials);
  }
}
