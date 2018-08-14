import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {

  constructor(private http: HttpClient) { }

  createNewUser(userData) {
    return this.http.post(`${environment.BASE_URL}/user/newUser`, userData);
  }
}
