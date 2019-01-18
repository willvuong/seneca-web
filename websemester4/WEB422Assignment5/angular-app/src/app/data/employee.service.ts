import { Injectable } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Employee } from "./employee"

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  private url = "https://nameless-earth-78519.herokuapp.com/employees";
  
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url);
  }
}