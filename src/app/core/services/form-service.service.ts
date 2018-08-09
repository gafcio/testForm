import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  constructor(private http: HttpClient) { }

  public getEmployees ( {
    return this.http.get('./src/assets/categories.json');
  }
}
