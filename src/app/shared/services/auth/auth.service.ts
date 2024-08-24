import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { AuthLogin } from '../../model/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL = 'http://localhost:3500';

  constructor(private http: HttpClient) { }

  public auth(request: AuthLogin): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'});
    let options = { headers: headers };
    return this.http.post<any>(`${this.URL}/login`, request, options)
  }
}
