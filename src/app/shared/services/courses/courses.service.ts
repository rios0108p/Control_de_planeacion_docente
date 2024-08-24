import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private URL = 'http://localhost:3500';

  constructor(private http: HttpClient) { }

  public getCoursesList(): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'});
    let options = { headers: headers };
    return this.http.get<any>(`${this.URL}/courses`, options);
  }
}
