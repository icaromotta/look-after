import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  private readonly API = `${environment.API}utils/`;

  constructor(private http: HttpClient) { }

  contact(data: any) {

    return this.http.post<any>(`${this.API}contact`, data)
  }
}
