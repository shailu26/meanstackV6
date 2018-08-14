import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

const HTTP_OPTIONS = {
  'headers': new HttpHeaders({'content-type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class UserDetailService {

  constructor(private http: HttpClient) { }

  createNewUser(userData) {
    return this.http.post(`${environment.BASE_URL}/user/newUser`, userData, HTTP_OPTIONS);
  }
}
