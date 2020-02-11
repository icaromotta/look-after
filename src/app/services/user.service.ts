import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly API = `${environment.API}users`;

  constructor(private http: HttpClient) { }

  add(data: any) {
    
    return this.http.post<any>(`${this.API}/create`, data)
  }

  login(data: any) {

    console.log(`${this.API}/login`)

    return this.http.post<any>(`${this.API}/login`, data)
  }
}
