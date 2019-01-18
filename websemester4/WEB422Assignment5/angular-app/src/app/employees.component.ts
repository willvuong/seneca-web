import { Component, OnInit } from '@angular/core';
import { Employee } from "./data/employee";
import { EmployeeService } from "./data/employee.service";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styles: ['/employees.component.css']
})

export class EmployeesComponent implements OnInit {
  employees: Employee[];
  getEmployeeSub: any;
  loadingError: boolean = false;

  constructor(private empServ: EmployeeService) { }

  ngOnInit() {
    this.getEmployeeSub = this.empServ.getEmployees().subscribe(e => this.employees = e, () => {
      this.loadingError = true;
    })
  }

  ngOnDestroy() {
    if (this.getEmployeeSub) {
      this.getEmployeeSub.unsubscribe();
    }
  }

}